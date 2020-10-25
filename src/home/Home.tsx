import React, { useContext } from 'react';
import userContext from '../userContext';

export default function Home() {
  let { user } = useContext(userContext);

  return (
    <h1>Hello {user ? user.name : ''}</h1>
  );
}
