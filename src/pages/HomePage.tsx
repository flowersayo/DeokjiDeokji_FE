import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';
import CreateRecordModal from 'component/modals/CreateRecordModal';
import CreateRecordBtn from 'component/home/CreateRecordBtn';
import { IPlace } from 'utils/interface';
import { LocationInfo } from 'component/LocationInfo';
import { getPlaces, getPlaceByName } from 'api/place';

declare global {
  interface Window {
    kakao: any;
  }
}

const HomePage = () => {
  const [isCreateRecordModalOpen, setIsCreateRecordModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [focused, setFocused] = useState<IPlace | null>(null);

  const [places, setPlaces] = useState<IPlace[]>([]);

  const fetchPlaces = async () => {
    const response = await getPlaces();
    console.log(response);
    setPlaces(response.content);
  };
  useEffect(() => {
    fetchPlaces();
  }, []);
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
      type: 'restaurant',
    },
    {
      id: 2,
      name: '생태연못',
      address: '서울 마포구 마포대로 173-14 마포센텀슬로우',
      latitude: 33.450936,
      longitude: 126.569477,
      type: 'coffee',
    },
    {
      id: 3,
      name: '텃밭',
      address: '서울 마포구 마포대로 173-14 마포센텀슬로우',
      latitude: 33.450879,
      longitude: 126.56994,
      type: 'birthday',
    },
    {
      id: 4,
      name: '근린공원',
      address: '서울 마포구 마포대로 173-14 마포센텀슬로우',
      latitude: 33.451393,
      longitude: 126.570738,
      type: 'coffee',
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
