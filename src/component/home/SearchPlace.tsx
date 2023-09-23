import React, { useState, useEffect } from 'react';
import { CustomFont } from 'styles/font';
import { styled } from 'styled-components';
import PlaceList from './PlaceList';
import { IPlace } from 'utils/interface';

const SearchPlace = ({ place, setPlace }: { place: IPlace; setPlace: any }) => {
  const [placeListVisible, setPlaceListVisible] = useState(false); // 장소 리스트

  const [inputValue, setInputValue] = useState<string>(place?.name);

  const places: IPlace[] = [
    {
      id: 0,
      name: '공덕 프론트원',
      type: 'Cafe',
      latitude: 101,
      longitude: 101,
      address: '서울 마포구 마포대로 173-14 마포센텀슬...',
    },
    {
      id: 1,
      name: '곱창파는 고깃집 마포점',
      type: 'Cafe',
      latitude: 101,
      longitude: 101,
      address: '서울 마포구 마포대로 173-14 마포센텀슬...',
    },
    {
      id: 2,
      name: '이화여자대학교',
      type: 'Cafe',
      latitude: 101,
      longitude: 101,
      address: '서울 마포구 마포대로 173-14 마포센텀슬...',
    },
    {
      id: 3,
      name: '이화여자대학교dd',
      type: 'Restaurant',
      latitude: 101,
      longitude: 101,
      address: '서울 마포구 마포대로 173-14 마포센텀슬...',
    },
  ];
  return (
    <Box>
      <Input
        placeholder="덕지순례 갈 원하는 장소를 검색해보세요"
        onFocus={() => setPlaceListVisible(true)}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}

        // onBlur={() => setPlaceListVisible(false)}
      />
      {placeListVisible && (
        <PlaceList
          places={places}
          setPlace={(place: IPlace) => {
            setPlace(place);
            setInputValue(place.name);
          }}
        />
      )}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
const Input = styled.input`
  display: flex;
  width: 100%;
  padding: 16px 26px;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  font-size: 14px;
  ::placeholder {
    color: var(--mono-gray-03, #848484);
  }

  background: var(--mono-gray-01, #f4f4f4);
  border: none;
  &:focus {
    outline: 1px solid black;
  }
`;
export default SearchPlace;
