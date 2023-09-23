import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { CustomFont } from 'styles/font';
import FeedOnIconSrc from 'assets/icons/feed_on.svg';
import FeedOffIconSrc from 'assets/icons/feed_off.svg';
import MarkerOnIconSrc from 'assets/icons/marker_on.svg';
import MarkerOffIconSrc from 'assets/icons/marker_off.svg';
import StickerOnIconSrc from 'assets/icons/sticker_on.svg';
import StickerOffIconSrc from 'assets/icons/sticker_off.svg';
import { theme } from 'styles/theme';

const BottomTabBar = () => {
  const tabLists = [
    {
      id: 0,
      name: '피드',
      src: [FeedOnIconSrc, FeedOffIconSrc],
      link: '/feed',
    },
    {
      id: 1,
      name: '내주변',
      src: [MarkerOnIconSrc, MarkerOffIconSrc],
      link: '/home',
    },
    {
      id: 2,
      name: '콜렉트북',
      src: [StickerOnIconSrc, StickerOffIconSrc],
      link: '/collect',
    },
  ];
  const [currentTab, setCurrentTab] = useState<number>(1); // 현재 활성화 된 탭 번호

  const handleTabClick = (idx: number) => {
    setCurrentTab(idx);
  };

  return (
    <NavBox>
      <TabWrapper>
        {tabLists.map(({ id, link, name, src }) => {
          const selected: boolean = currentTab === id;
          return (
            <Link
              to={link}
              key={id}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <Tab
                onClick={() => {
                  handleTabClick(id);
                }}
              >
                {selected ? <img src={src[0]} /> : <img src={src[1]} />}
                {selected ? (
                  <CustomFont> {name}</CustomFont>
                ) : (
                  <CustomFont color={theme.colors.gray03}> {name}</CustomFont>
                )}
              </Tab>
            </Link>
          );
        })}
      </TabWrapper>
    </NavBox>
  );
};

const NavBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  bottom: 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding-bottom: 21px;
  /* navigatonbar */
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;
const Tab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;
const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-left: 4rem;
  margin-right: 4rem;
`;

export default BottomTabBar;
