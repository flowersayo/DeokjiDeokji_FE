export type DataType = 'Restaurant' | 'Cafe' | 'BirthCafe';

export interface IUser {
  name: string;
  email: string;
  birthday: string;
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
