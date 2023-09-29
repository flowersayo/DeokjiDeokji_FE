import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';
import CreateRecordModal from 'component/modals/CreateRecordModal';
import CreateRecordBtn from 'component/home/CreateRecordBtn';
import { IPlace, IRecord } from 'utils/interface';
import { LocationInfo } from 'component/LocationInfo';
import { GET } from 'utils/axios';
import { records } from 'db/records';
import GroupFilter from 'component/home/GroupFilter';

declare global {
  interface Window {
    kakao: any;
  }
}

const HomePage = () => {
  const [isCreateRecordModalOpen, setIsCreateRecordModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [focused, setFocused] = useState<IRecord | null>(null);

  const [selectedLocation, setSelectedLocation] = useState<IPlace>(); // 선택장소
  const [selectedGroup, setSelectedGroup] = useState<
    'BTS' | 'newJeans' | 'BlackPink' | 'seventeen' | null
  >(null);

  useEffect(() => {
    /*
    if (!selectedGroup) {
      GET('/api/v1/place')
        .then((res) => {
          setSelectedLocations(res.content);
        })
        .catch(() => {
          alert('데이터를 불러오는데에 실패했습니다.');
        });
    } else {
      GET(`/api/v1/idol/group/${selectedGroup}`)
        .then((res) => {
          setSelectedLocations(res.content);
        })
        .catch(() => {
          alert('데이터를 불러오는데에 실패했습니다.');
        });
    }
    */
  }, [selectedGroup]);

  const handleCreateBtnClick = () => {
    setIsCreateRecordModalOpen(true);
  };

  return (
    <HomePageLayout>
      <CreateRecordModal
        isOpen={isCreateRecordModalOpen}
        setOpen={setIsCreateRecordModalOpen}
      />
      <GroupFilter
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
      />
      <Map
        center={{ lat: 37.530025, lng: 126.964773 }}
        style={{ width: '100%', height: '100%' }}
      >
        {records?.map((loc) => {
          const latlng = {
            lat: loc.place.latitude,
            lng: loc.place.longitude,
          };
          return (
            <MapMarker
              key={`${loc.place.name}-${latlng}`}
              position={latlng}
              image={{
                src: `/assets/svg/${loc.place.type}.svg`,
                size: { width: 35, height: 35 },
              }}
              title={loc.place.name}
              onClick={() => {
                setIsOpen(true);
                setFocused(loc);
              }}
            />
          );
        })}
        {isOpen && (
          <LocationContainer>
            <LocationInfo focused={focused} shadow />
          </LocationContainer>
        )}
      </Map>
      <BtnContainer>
        <CreateRecordBtn onClick={handleCreateBtnClick} />
      </BtnContainer>
    </HomePageLayout>
  );
};

const BtnContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 120px;
  display: flex;
  justify-content: flex-end;
  padding: 0 24px;
  z-index: 3;
`;

const HomePageLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  position: relative;
`;

const LocationContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 120px;
  display: flex;
  justify-content: center;
  padding: 0 24px;
  z-index: 4;
`;

export default HomePage;
