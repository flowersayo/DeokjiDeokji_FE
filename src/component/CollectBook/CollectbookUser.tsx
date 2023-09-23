import React from 'react';
import { useRecoilValue } from 'recoil';
import { user } from 'utils/atom';

const CollectbookUser = () => {
  const userData = useRecoilValue(user);
  if (userData === null) return null;
  const { username, email } = userData;
  return (
    <div>
      <div></div>
      <div>{username}</div>
      <div>{email}</div>
    </div>
  );
};

export default CollectbookUser;
