import React from 'react';
import { Router as Browse, Location } from '@reach/router';
import { ScreenHome } from '../screens';

const Router = () => (
  <Browse >
    <ScreenHome path="/" />
  </Browse>
);

export default Router;
