export type DataType = 'RESTAURANT' | 'CAFE' | 'BIRTHDAY_CAFE';

export interface IUser {
  username: string;
  email: string;
  birth: string;
}
export interface IGroup {
  name: string;
  members: string[];
}

// export interface IPlace {
//   id: number;
//   name: string;
//   address: string;
//   latitude: number;
//   longitude: number;
// }

export interface IRecord {
  purpose: number;
  category: string;
  place: IPlace;
  group: string;
  member: string;
  temperature?: number;
}

export interface IPlace {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  category?: string;
}

export interface IPeoples {
  group: string;
  name: string;
}
