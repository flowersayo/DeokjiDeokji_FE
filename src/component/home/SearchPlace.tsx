import React, { useState, useEffect } from 'react';
import { CustomFont } from 'styles/font';
import { styled } from 'styled-components';
import PlaceList from './PlaceList';
import { IPlace } from 'utils/interface';
import SearchIconSrc from 'assets/icons/search.svg';

/* https://apis.map.kakao.com/web/sample/keywordList/ */
const SearchPlace = ({ place, setPlace }: { place: IPlace; setPlace: any }) => {
  const [placeListVisible, setPlaceListVisible] = useState(false); // 장소 리스트

  const [inputValue, setInputValue] = useState<string>(place?.name);

  const initialPlaces: IPlace[] = [
    /*
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
      name: '톤앤매너',
      type: 'BirthCafe',
      latitude: 101,
      longitude: 101,
      address: '서울 마포구 와우산로29가길 13 2층 톤앤매너',
    },
    {
      id: 3,
      name: '앤디스 커피 홍대점',
      type: 'Cafe',
      latitude: 101,
      longitude: 101,
      address: '서울 마포구 와우산로35길 75 2층,3층',
    },
    {
      id: 4,
      name: '카페 스핀오프',
      type: 'Cafe',
      latitude: 101,
      longitude: 101,
      address: '서울 마포구 와우산로 161 성경빌딩 2층 203호',
    },
    */
  ];

  const [results, setResults] = useState(initialPlaces);

  // 장소 검색
  const handleClickSearch = (keyword: string) => {
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(keyword, (data, status, _pagination) => {
      console.log(data);
      if (status === kakao.maps.services.Status.OK) {
        console.log(data);

        // 데이터 정제
        const newResults: IPlace[] = [];

        for (const item of data) {
          const { address_name, id, place_name, place_url, x, y } = item;
          const newItem = {
            address: address_name,
            type: place.type, // 기존에 선택된 카테고리 재활용
            id: parseInt(id),
            name: place_name,
            latitude: parseFloat(x),
            longitude: parseFloat(y),
            img: place_url,
          };
          newResults.push(newItem);
        }
        setResults(newResults);
      }
    });
  };

  return (
    <Box>
      <Row>
        <Input
          placeholder="덕지순례 갈 원하는 장소를 입력해주세요"
          onFocus={() => setPlaceListVisible(true)}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}

          // onBlur={() => setPlaceListVisible(false)}
        />
        <Img
          src={SearchIconSrc}
          onClick={() => handleClickSearch(inputValue)}
        />
      </Row>
      {placeListVisible && (
        <PlaceList
          places={results}
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
  max-height: 350px;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
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

const Img = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default SearchPlace;
