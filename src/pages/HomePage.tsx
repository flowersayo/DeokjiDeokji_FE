import React, { useState } from 'react';

import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';
import CreateRecordModal from 'component/modals/CreateRecordModal';
import CreateRecordBtn from 'component/home/CreateRecordBtn';
import { IPlace } from 'utils/interface';
import { LocationInfo } from 'component/LocationInfo';
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

  const handleCreateBtnClick = () => {
    setIsCreateRecordModalOpen(true);
  };

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
        {places.map((loc) => {
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
        {isOpen && <LocationInfo focused={focused} position="absolute" />}
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

export default HomePage;
