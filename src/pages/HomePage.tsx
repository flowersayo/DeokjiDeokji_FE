import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';
import CreateRecordModal from 'component/modals/CreateRecordModal';
import CreateRecordBtn from 'component/home/CreateRecordBtn';
import { IPlace, IRecord } from 'utils/interface';
import { LocationInfo } from 'component/LocationInfo';
import { GET } from 'utils/axios';
import { RECORD_DUMMY_DATA } from 'db/records';
import GroupFilter from 'component/home/GroupFilter';
import { getPlaces } from 'api/place';

declare global {
  interface Window {
    kakao: any;
  }
}

const HomePage = () => {
  const [isCreateRecordModalOpen, setIsCreateRecordModalOpen] = useState(false);

  const [focused, setFocused] = useState<IRecord | null>(null);

  const [records, setRecords] = useState<IRecord[]>(RECORD_DUMMY_DATA);
  const [selectedLocation, setSelectedLocation] = useState<IPlace>(); // 선택장소
  const [selectedGroup, setSelectedGroup] = useState<
    'BTS' | '뉴진스' | '블랙핑크' | '세븐틴' | null
  >(null);

  useEffect(() => {
    // const result = getPlaces();
    // setRecords(result.data);
  }, []);

  const handleCreateBtnClick = () => {
    setIsCreateRecordModalOpen(true);
  };

  const initState = () => {
    // 상태 초기화
    setSelectedGroup(null);
    setFocused(null);
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
        center={{ lat: 37.525121, lng: 126.96339 }}
        style={{ width: '100%', height: '100%' }}
        onClick={initState}
      >
        {records
          ?.filter((record, idx) => {
            return selectedGroup ? selectedGroup === record.group : true;
          })
          .map((loc) => {
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
                  setFocused(loc);
                }}
              />
            );
          })}
        {focused && (
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
