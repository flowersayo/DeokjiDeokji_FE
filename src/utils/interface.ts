export type DataType = 'RESTAURANT' | 'CAFE' | 'BIRTHDAY_CAFE';

export interface IUser {
  username: string;
  email: string;
  birth: string;
}

export interface IPlace {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  category: string;
}
