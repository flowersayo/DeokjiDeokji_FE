import React, { useState } from 'react';

import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';
import CreateRecordModal from 'component/modals/CreateRecordModal';
import CreateRecordBtn from 'component/home/CreateRecordBtn';
import { Body1_1, Body2_3, Title } from 'styles/font';

declare global {
  interface Window {
    kakao: any;
  }
}

interface IPlace {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  category: string;
}

const HomePage = () => {
  const [isCreateRecordModalOpen, setIsCreateRecordModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [focused, setFocused] = useState<IPlace | null>(null);

  const handleCreateBtnClick = () => {
    setIsCreateRecordModalOpen(true);
  };

  const locations = [
    {
      id: 1,
      name: '카카오',
      address: '서울 마포구 마포대로 173-14 마포센텀슬로우',
      latitude: 33.450705,
      longitude: 126.570677,
      category: 'restaurant',
    },
    {
      id: 2,
      name: '생태연못',
      address: '서울 마포구 마포대로 173-14 마포센텀슬로우',
      latitude: 33.450936,
      longitude: 126.569477,
      category: 'coffee',
    },
    {
      id: 3,
      name: '텃밭',
      address: '서울 마포구 마포대로 173-14 마포센텀슬로우',
      latitude: 33.450879,
      longitude: 126.56994,
      category: 'birthday',
    },
    {
      id: 4,
      name: '근린공원',
      address: '서울 마포구 마포대로 173-14 마포센텀슬로우',
      latitude: 33.451393,
      longitude: 126.570738,
      category: 'coffee',
    },
  ];

  return (
    <HomePageLayout>
      <CreateRecordModal
        isOpen={isCreateRecordModalOpen}
        setOpen={setIsCreateRecordModalOpen}
      />
      <Map
        center={{ lat: 33.450705, lng: 126.570677 }}
        style={{ width: '100%', height: '100%' }}
      >
        {locations.map((loc) => {
          const latlng = {
            lat: loc.latitude,
            lng: loc.longitude,
          };
          return (
            <>
              <MapMarker
                key={`${loc.name}-${latlng}`}
                position={latlng}
                image={{
                  src: `/assets/svg/${loc.category}.svg`,
                  size: { width: 24, height: 35 },
                }}
                title={loc.name}
                onClick={() => {
                  setIsOpen(true);
                  setFocused(loc);
                }}
              />
            </>
          );
        })}
        {isOpen && (
          <LocationInfoContainer>
            <LocationInfoTop>
              <Body1_1>{focused?.name}</Body1_1>
              <Body2_3>{focused?.address}</Body2_3>
            </LocationInfoTop>
          </LocationInfoContainer>
        )}
      </Map>
      <CreateRecordBtn onClick={handleCreateBtnClick} />
    </HomePageLayout>
  );
};

const HomePageLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const LocationInfoContainer = styled.div`
  width: 90%;
  height: 120px;
  margin: 0 40px 0 20px;
  border-radius: 12px;
  background-color: #fff;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 120px;
  z-index: 4;
`;

const LocationInfoTop = styled.div`
  width: 70%;
  height: 50px;

  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  flex-direction: column;
`;

export default HomePage;
