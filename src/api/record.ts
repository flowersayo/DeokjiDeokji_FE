import { GET, POST } from 'utils/axios';
import { IRecord } from 'utils/interface';

// 덕지순례 방문 기록 정보
export const createRecord = async (body: IRecord) => {
  return await POST(`/api/v1/place/`, body);
};
