import { GET, POST } from 'utils/axios';

// 모든 덕지 순례 장소 조회
export const getPlaces = async () => {
  return await GET(`/api/v1/place`);
};
