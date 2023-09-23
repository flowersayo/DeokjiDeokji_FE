import React, { useCallback, useEffect, useState } from 'react';
import { GET } from 'utils/axios';
import { HistoryCollect } from './HistoryCollect';

const CollectBookGrid = (mode: 'HISTORY' | 'FUTURE') => {
  const [data, setData] = useState([]);

  const getCollectData = useCallback(() => {
    if (mode === 'HISTORY') {
      GET('/api/v1/user/storage')
        .then((res) => {
          setData(res.data);
        })
        .catch(() => {
          alert('데이터를 불러오는 데 실패했습니다.');
          return;
        });
    } else {
      GET('/api/v1/user/booking-storage')
        .then((res) => {
          setData(res.data);
        })
        .catch(() => {
          alert('데이터를 불러오는 데 실패했습니다.');
          return;
        });
    }
  }, [mode]);

  useEffect(() => {
    getCollectData();
  }, [mode]);

  return (
    <div></div>
    // <div>
    //   {mode === 'HISTORY' ? (
    //     data.map((item: any) => {
    //       <HistoryCollect key={item.id} tag=
    //     })
    //   ) : ()}
    // </div>
  );
};
