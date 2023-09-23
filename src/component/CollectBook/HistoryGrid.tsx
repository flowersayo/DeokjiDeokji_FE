import React, { useCallback, useEffect, useState } from 'react';
import { GET } from 'utils/axios';
import { HistoryCollect, HistoryCollectProps } from './HistoryCollect';
import { CollectBookGridWrapper } from './CollectComponent';

export const HistoryGrid = () => {
  const [data, setData] = useState<HistoryCollectProps[]>([]);

  useEffect(() => {
    GET('/api/v1/user/storage')
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
