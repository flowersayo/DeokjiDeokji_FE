export interface ISample {
  sample: 'sample';
}

export interface IPlace {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  category: string;
}

export interface IPeoples {
  group: string;
  name: string;
}
