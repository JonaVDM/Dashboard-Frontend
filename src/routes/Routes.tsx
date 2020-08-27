import { RouteLink } from './RouterElement';
import Home from '../home/Home';
import React from 'react';
import UITester from '../ui-tester/UITester';
import UsersManager from '../users-manager';

const routes: RouteLink[] = [
  {
    location: '/',
    element: (<Home />)
  },
  {
    location: '/users',
    element: (<UsersManager />),
    requirements: ['user.read']
  },
  {
    location: '/grid',
    element: (<UITester />),
    requirements: ['admin']
  },
];

export default routes;
