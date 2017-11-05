/**
* @providesModule skydreamer/Application
*/

import React from 'react';
import { Provider } from 'react-redux';
import store from 'skydreamer/redux/store';
import Router from 'skydreamer/Router';
import Images from 'skydreamer/images'; // eslint-disable-line

export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
