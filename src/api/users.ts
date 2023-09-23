import axios from 'axios';
import { GET } from 'utils/axios';

export const getUser = () => {
  return GET('/api/v1/user/getMe');
};
