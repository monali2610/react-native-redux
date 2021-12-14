import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';

import { Provider } from "react-redux";
import Store from "./src/Redux/Store";
const RNRedux = () => (
  <Provider store={Store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
