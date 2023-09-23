import { atom } from 'recoil';
import { IUser } from './interface';

export const user = atom<IUser | null>({
  key: 'user',
  default: null,
});
