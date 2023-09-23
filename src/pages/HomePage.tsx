import React, { useState } from 'react';

import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';
import CreateRecordModal from 'component/modals/CreateRecordModal';
import CreateRecordBtn from 'component/home/CreateRecordBtn';

declare global {
  interface Window {
    kakao: any;
  }
}
const HomePage = () => {
  const [isCreateRecordModalOpen, setIsCreateRecordModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [focused, setFocused] = useState<number | null>(null);

  const handleCreateBtnClick = () => {
    setIsCreateRecordModalOpen(true);
  };
  const locations = [
    {
      id: 1,
      title: '카카오',
      latlng: {
        lat: 33.450705,
        lng: 126.570677,
      },
      category: 'restaurant',
    },
    {
      id: 2,
      title: '생태연못',
      latlng: {
        lat: 33.450936,
        lng: 126.569477,
      },
      category: 'coffee',
    },
    {
      id: 3,
      title: '텃밭',
      latlng: {
        lat: 33.450879,
        lng: 126.56994,
      },
      category: 'birthday',
    },
    {
      id: 4,
      title: '근린공원',
      latlng: {
        lat: 33.451393,
        lng: 126.570738,
      },
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
        {locations.map((loc, idx) => (
          <>
            <MapMarker
              key={`${loc.title}-${loc.latlng}`}
              position={loc.latlng}
              image={{
                src: `/assets/svg/${loc.category}.svg`,
                size: { width: 24, height: 35 },
              }}
              title={loc.title}
              onClick={() => {
                setIsOpen(true);
                setFocused(loc.id);
              }}
            />
          </>
        ))}
        {isOpen && <LocationInfoContainer>{focused}</LocationInfoContainer>}
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

export default HomePage;
