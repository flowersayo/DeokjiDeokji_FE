import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Title } from 'styles/font';
import Recommmend from 'component/feed/Recommmend';
import DuckjiHeadSrc from 'assets/images/duckji-head.svg';
import ToastMessage from 'component/feed/ToastMessage';
import { LocationInfo } from 'component/LocationInfo';
import { places } from 'db/places';
import { records } from 'db/records';

const FeedPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showToast = () => {
    setIsVisible(true);
  };
  return (
    <FeedPageLayout>
      {isVisible && (
        <ToastMessage
          text={'당연히 가본다 를 추천하셨습니다!'}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      )}

      <Section>
        <Title>
          덕지순례 오늘 고민,
          <br /> 같이 해결해볼까요?
        </Title>
        <Recommmend showToast={showToast} />
      </Section>
      <Section>
        <Left>
          <Title>덕지가 추천하는 이번주 덕지 순례!</Title>
        </Left>
        {records.map((data) => {
          return (
            <LocationInfo
              key={`${data.place.name}-${data.place.id}`}
              focused={data}
              position="relative"
            />
          );
        })}
      </Section>

      <Img src={DuckjiHeadSrc} />
    </FeedPageLayout>
  );
};

const FeedPageLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  white-space: pre-line;
  padding: 22px;
  padding-top: 50px;
  overflow-x: hidden;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 22px 0px;
  gap: 10px;
`;

const Left = styled.div`
  width: 100%;
  padding-left: 20px;
`;

const Img = styled.img`
  transform: rotate(11.919deg);
  position: absolute;
  top: 50px;
  right: 0;
  z-index: -1;
`;
export default FeedPage;
