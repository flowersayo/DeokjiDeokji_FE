import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

declare global {
  interface Window {
    kakao: any;
  }
}
const HomePage = () => {
  return (
    <>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <MapMarker
          position={{ lat: 33.5563, lng: 126.79581 }}
          image={{
            src: '/assets/svg/restaurant.svg', // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 29,
            }, // 마커이미지의 크기입니다
          }}
        ></MapMarker>
      </Map>
    </>
  );
};

export default HomePage;
