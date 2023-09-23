import React, { useEffect, useState } from 'react';
import { GET } from 'utils/axios';
import { FutureCollect, FutureCollectProps } from './FutureCollect';
import { CollectBookGridWrapper } from './CollectComponent';

export const FutureGrid = () => {
  const [data, setData] = useState<FutureCollectProps[]>([]);

  useEffect(() => {
    GET('/api/v1/user/booking-storage')
      .then((res) => {
        setData(res);
      })
      .catch(() => {
        alert('데이터를 불러오는 데 실패했습니다.');
        return;
      });
  }, []);

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
