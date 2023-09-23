import React from 'react';
import styled from 'styled-components';
import { Body2_3 } from 'styles/font';
import { DataType } from 'utils/interface';
import { CollectLayout, CollectName, CollectArtist } from './CollectComponent';
import temperature_icon from 'assets/icons/fluent_temperature.svg';

export type HistoryCollectProps = {
  id?: number;
  tag: DataType;
  name: string;
  artist: string;
  temperature: number;
};

export const HistoryCollect = ({
  tag,
  name,
  artist,
  temperature,
}: HistoryCollectProps) => {
  return (
    <CollectLayout tag={tag}>
      <CollectName>{name}</CollectName>
      <CollectArtist>{'#' + artist}</CollectArtist>
      <CollectTemperature>
        <Temperature src={temperature_icon} />
        <Body2_3>{temperature + '°'}</Body2_3>
      </CollectTemperature>
    </CollectLayout>
  );
};

const Temperature = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const CollectTemperature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
