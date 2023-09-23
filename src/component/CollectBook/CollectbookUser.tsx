import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { user } from 'utils/atom';
import { Body1_1, Body2_3 } from 'styles/font';

const CollectbookUser = () => {
  const userData = useRecoilValue(user);
  if (userData === null) return null;
  const { name, email } = userData;
  return (
    <UserInfoWrapper>
      <Circle />
      <UserInfo>
        <Body1_1>{name + '님'}</Body1_1>
        <Email>{email}</Email>
      </UserInfo>
    </UserInfoWrapper>
  );
};

const Circle = styled.div`
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 50%;
  background-color: #dcdcdc;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Email = styled(Body2_3)`
  color: #848484;
`;

export default CollectbookUser;
