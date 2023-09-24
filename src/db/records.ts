/*
 export interface IRecord {
  purpose: number;
  place: IPlace;
  group: string;
  member: string;
  temperature?: number;
}
*/

export const records = [
  {
    purpose: 0,
    group: '아이즈원',
    member: '안유진',
    place: {
      id: 1,
      name: '금돼지 식당',
      address: '서울특별시 중구 신당동 다산로 149',
      latitude: 37.55723,
      longitude: 127.011697,
      type: 'Restaurant',
      img: 'https://lh5.googleusercontent.com/p/AF1QipO3y3BGlTnfVRVE4NBEql3F1b0UvHetXSysx-K2=w718-h538-p-k-no',
    },
  },
  {
    purpose: 0,
    group: 'BTS',
    member: '제이홉',
    place: {
      id: 2,
      name: '카페 차품집',
      address: '서울시 용산구 한강대로 10길 11-50',
      latitude: 37.524538,
      longitude: 126.964816,
      type: 'BirthCafe',
      img: 'https://pbs.twimg.com/media/F51tfX5aYAIUSqw?format=jpg&name=large',
    },
  },
  {
    purpose: 0,
    group: '세븐틴',
    member: '버논',
    place: {
      id: 3,
      name: '시애틀 에스프레소',
      address: '서울 용산구 한강대로11길 4',
      latitude: 37.525121,
      longitude: 126.96339,
      type: 'BirthCafe',
      img: 'https://pbs.twimg.com/media/F6nCtXoboAAsvGQ?format=jpg&name=medium',
    },
  },
  {
    purpose: 0,
    group: '블랙핑크',
    member: '제니',
    place: {
      id: 4,
      name: '열봉부엌',
      address: '서울특별시 용산구 원효로1가 43-26',
      latitude: 37.539248,
      longitude: 126.96925,
      type: 'Restaurant',
      img: 'https://lh5.googleusercontent.com/p/AF1QipNwHCyM8i2cMbkLHfscoQcAccWTpyRNErBBSPMB=w408-h544-k-no',
    },
  },
  {
    purpose: 1,
    group: '뉴진스',
    member: '민지',
    place: {
      id: 5,
      name: '상수동카페311',
      address: '서울특별시 마포구 상수동 독막로15길 13-5',
      latitude: 37.548524,
      longitude: 126.921894,
      type: 'Cafe',
      img: 'https://lh5.googleusercontent.com/p/AF1QipOwigu_OjZLIlPDvYJBJgRZtXCvqN_btqdPCqTl=w444-h240-k-no',
    },
  },
  {
    purpose: 0,
    group: 'BTS',
    member: '제이홉',
    place: {
      id: 6,
      name: '미미옥',
      address: '서울특별시 용산구 한강대로15길 27',
      latitude: 37.526372,
      longitude: 126.962946,
      type: 'Restaurant',
      img: 'https://lh5.googleusercontent.com/p/AF1QipM1WPYOsjDEhptJMnyRlhCB7UtE6l66VHem6ADo=w408-h510-k-no',
    },
  },
];
