import React, { useCallback, useEffect, useState } from 'react';
import { GET } from 'utils/axios';
import { HistoryCollect, HistoryCollectProps } from './HistoryCollect';
import { CollectBookGridWrapper } from './CollectComponent';

export const HistoryGrid = () => {
  const [data, setData] = useState<HistoryCollectProps[]>([]);

  useEffect(() => {
    GET('/api/v1/user/storage')
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
