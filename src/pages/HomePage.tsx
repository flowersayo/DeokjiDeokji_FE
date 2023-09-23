import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';
import CreateRecordModal from 'component/modals/CreateRecordModal';
import CreateRecordBtn from 'component/home/CreateRecordBtn';
import { IPlace } from 'utils/interface';
import { LocationInfo } from 'component/LocationInfo';
import { GET } from 'utils/axios';

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

  useEffect(() => {
    GET('/api/v1/place')
      .then((res) => {
        setLocations(res.content);
      })
      .catch(() => {
        alert('데이터를 불러오는데에 실패했습니다.');
      });
  }, []);

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
        {locations.map((loc) => {
          const latlng = {
            lat: loc.latitude,
            lng: loc.longitude,
          };
          return (
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
          );
        })}
        {isOpen && <LocationInfo focused={focused} />}
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
