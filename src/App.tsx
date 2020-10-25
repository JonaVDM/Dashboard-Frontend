import React from 'react';
import Routes from './routes/RouterElement';
import { UserProvider } from './userContext';

export default function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}
