import React, { useCallback, useEffect, useState } from 'react';
import { GET } from 'utils/axios';
import { HistoryCollect, HistoryCollectProps } from './HistoryCollect';
import { CollectBookGridWrapper } from './CollectComponent';

export const HistoryGrid = () => {
  const [data, setData] = useState<HistoryCollectProps[]>([
    {
      id: 1,
      tag: 'Restaurant',
      name: '유정식당',
      artist: 'BTS_정국',
      temperature: 90,
    },
    {
      id: 3,
      tag: 'Cafe',
      name: '백야드빌더성수',
      artist: '세븐틴_조슈아',
      temperature: 78,
    },
    {
      id: 4,
      tag: 'Cafe',
      name: '머메이드 레시피',
      artist: 'NCT_쟈니',
      temperature: 75,
    },
    {
      id: 2,
      tag: 'Restaurant',
      name: '송정3대국밥',
      artist: '뉴진스_혜인',
      temperature: 80,
    },
    {
      id: 5,
      tag: 'BirthCafe',
      name: 'CAFE2734',
      artist: '세븐틴_민규',
      temperature: 30,
    },
  ]);

  // useEffect(() => {
  //   GET('/api/v1/user/storage')
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
      {data.map((collect: HistoryCollectProps) => {
        return (
          <HistoryCollect
            key={collect.id}
            tag={collect.tag}
            name={collect.name}
            artist={collect.artist}
            temperature={collect.temperature}
          />
        );
      })}
    </CollectBookGridWrapper>
  );
};
