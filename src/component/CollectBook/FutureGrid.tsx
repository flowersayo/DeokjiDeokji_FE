import React, { useEffect, useState } from 'react';
import { GET } from 'utils/axios';
import { FutureCollect, FutureCollectProps } from './FutureCollect';
import { CollectBookGridWrapper } from './CollectComponent';

export const FutureGrid = () => {
  const [data, setData] = useState<FutureCollectProps[]>([]);

  useEffect(() => {
    GET('/api/v1/user/booking-storage')
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        alert('데이터를 불러오는 데 실패했습니다.');
        return;
      });
  }, []);

  // 빈 경우에 대한 처리 안해둠

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
