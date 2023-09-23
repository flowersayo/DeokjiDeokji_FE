import React, { useState } from 'react';
import { styled } from 'styled-components';
import { IPlace } from 'utils/interface';
import CheckIconSrc from 'assets/icons/check.svg';
import UnCheckIconSrc from 'assets/icons/uncheck.svg';
import { Body2_2, Body2_3 } from 'styles/font';
const PlaceList = ({
  places,
  setPlace,
}: {
  places: IPlace[];
  setPlace: any;
}) => {
  const [selected, setSelected] = useState(-1);
  return (
    <List>
      {places.length === 0 && <Body2_2>검색 결과가 없습니다.</Body2_2>}
      {places.map((place: IPlace) => {
        const { name, address, id } = place;
        return (
          <PlaceItem key={name}>
            <Col>
              <Body2_2>{name}</Body2_2>
              <Body2_3>{address}</Body2_3>
            </Col>
            {selected === id ? (
              <img src={CheckIconSrc} />
            ) : (
              <img
                src={UnCheckIconSrc}
                onClick={() => {
                  setPlace(place);
                  setSelected(id);
                }}
              />
            )}
          </PlaceItem>
        );
      })}
    </List>
  );
};
const List = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
  overflow-y: scroll;
  max-height: 500px;
`;

const PlaceItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export default PlaceList;
