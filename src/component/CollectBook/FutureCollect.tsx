import React from 'react';
import styled from 'styled-components';
import { Body1_1, Body2_3 } from 'styles/font';
import { DataType } from 'utils/interface';
import { CollectLayout, CollectName, CollectArtist } from './CollectComponent';

type FutureCollectProps = {
  tag: DataType;
  name: string;
  artist: string;
};

export const FutureCollect = ({ tag, name, artist }: FutureCollectProps) => {
  return (
    <CollectLayout tag={tag}>
      <CollectName>{name}</CollectName>
      <CollectArtist>{artist}</CollectArtist>
    </CollectLayout>
  );
};
