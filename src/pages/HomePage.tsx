import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';
import CreateRecordModal from 'component/modals/CreateRecordModal';
import CreateRecordBtn from 'component/home/CreateRecordBtn';
import { IPlace } from 'utils/interface';
import { LocationInfo } from 'component/LocationInfo';
import { getPlaces, getPlaceByName } from 'api/place';
import { GET } from 'utils/axios';
import { places } from 'db/places';

declare global {
  interface Window {
    kakao: any;
  }
}

const HomePage = () => {
  const [isCreateRecordModalOpen, setIsCreateRecordModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [focused, setFocused] = useState<IPlace | null>(null);
  const [locations, setLocations] = useState<IPlace[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<
    'BTS' | '뉴진스' | '블랙핑크' | '세븐틴' | null
  >(null);

  const [places, setPlaces] = useState<IPlace[]>([]);

  useEffect(() => {
    if (!selectedGroup) {
      GET('/api/v1/place')
        .then((res) => {
          setLocations(res.content);
        })
        .catch(() => {
          alert('데이터를 불러오는데에 실패했습니다.');
        });
    } else {
      GET(`/api/v1/idol/group/${selectedGroup}`)
        .then((res) => {
          setLocations(res.content);
        })
        .catch(() => {
          alert('데이터를 불러오는데에 실패했습니다.');
        });
    }
  }, [selectedGroup]);

  const handleCreateBtnClick = () => {
    setIsCreateRecordModalOpen(true);
  };

  return (
    <HomePageLayout>
      <GroupFilterWrapper>
        <GroupFilterBtn
          $selected={selectedGroup === 'BTS'}
          onClick={() => setSelectedGroup('BTS')}
        >
          BTS
        </GroupFilterBtn>
        <GroupFilterBtn
          $selected={selectedGroup === '뉴진스'}
          onClick={() => setSelectedGroup('뉴진스')}
        >
          뉴진스
        </GroupFilterBtn>
        <GroupFilterBtn
          $selected={selectedGroup === '블랙핑크'}
          onClick={() => setSelectedGroup('블랙핑크')}
        >
          블랙핑크
        </GroupFilterBtn>
        <GroupFilterBtn
          $selected={selectedGroup === '세븐틴'}
          onClick={() => setSelectedGroup('세븐틴')}
        >
          세븐틴
        </GroupFilterBtn>
      </GroupFilterWrapper>
      <CreateRecordModal
        isOpen={isCreateRecordModalOpen}
        setOpen={setIsCreateRecordModalOpen}
      />
      <Map
        center={{ lat: 37.530025, lng: 126.964773 }}
        style={{ width: '100%', height: '100%' }}
      >
        {places?.map((loc) => {
          const latlng = {
            lat: loc.latitude,
            lng: loc.longitude,
          };
          return (
            <MapMarker
              key={`${loc.name}-${latlng}`}
              position={latlng}
              image={{
                src: `/assets/svg/${loc.type}.svg`,
                size: { width: 35, height: 35 },
              }}
              title={loc.name}
              onClick={() => {
                setIsOpen(true);
                setFocused(loc);
              }}
            />
          );
        })}
        {isOpen && <LocationInfo focused={focused} position="absolute" />}
      </Map>
      <CreateRecordBtn onClick={handleCreateBtnClick} />
    </HomePageLayout>
  );
};

const GroupFilterWrapper = styled.div`
  display: flex;
  gap: 1.15rem;
  margin: 0 2.76rem;
  margin-top: 1.5rem;
`;

const GroupFilterBtn = styled.button<{ $selected: boolean }>`
  display: flex;
  padding: 0.6912rem 1.8432rem;
  justify-content: center;
  align-items: center;
  gap: 0.4608rem;
  border-radius: 1.3824rem;
  border: 1.152px solid #171717;
  background: ${({ $selected }) => ($selected ? '#74FAB9' : '#FFFFFF')};
  box-shadow: 0px 0px 11.52px 0px rgba(0, 0, 0, 0.1);
  font-size: 1.8432rem;
`;

const HomePageLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export default HomePage;
