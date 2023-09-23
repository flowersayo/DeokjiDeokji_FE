import { atom } from 'recoil';
import { IUser } from './interface';

export const user = atom<IUser>({
  key: 'user',
  default: {
    username: '',
    email: '',
    birth: '',
  },
});
