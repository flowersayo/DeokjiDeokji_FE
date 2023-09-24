import React, { useEffect, useState } from 'react';
import { GET } from 'utils/axios';
import { FutureCollect, FutureCollectProps } from './FutureCollect';
import { CollectBookGridWrapper } from './CollectComponent';

export const FutureGrid = () => {
  const [data, setData] = useState<FutureCollectProps[]>([
    {
      id: 1,
      tag: 'BirthCafe',
      name: '카페 세화',
      artist: '세븐틴_민규',
    },
    {
      id: 2,
      tag: 'BirthCafe',
      name: '카페 단',
      artist: '뉴진스_민지',
    },
    {
      id: 3,
      tag: 'Restaurant',
      name: '하이디라오',
      artist: '세븐틴_준',
    },
    {
      id: 4,
      tag: 'Cafe',
      name: '더카페 마룬에프',
      artist: '블랙핑크_로제',
    },
  ]);

  // useEffect(() => {
  //   GET('/api/v1/user/booking-storage')
  //     .then((res) => {
  //       setData(res);
  //     })
  //     .catch(() => {
  //       alert('데이터를 불러오는 데 실패했습니다.');
  //       return;
  //     });
  // }, []);

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <CollectBookGridWrapper>
      {data.map((collect: FutureCollectProps) => {
        return (
          <FutureCollect
            key={collect.id}
            tag={collect.tag}
            name={collect.name}
            artist={collect.artist}
          />
        );
      })}
    </CollectBookGridWrapper>
  );
};
