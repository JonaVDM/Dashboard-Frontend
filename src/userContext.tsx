import React from 'react';

const userContext = React.createContext<{ user?: User | {}, token?: string }>({});

export default userContext;
