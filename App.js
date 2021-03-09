import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Conten from './app/component/conten';
import { store } from './app/component/store/store';
import { Provider } from 'react-redux'



const App = (props) => (
  <Provider store={store}>
    <Conten />
  </Provider>
);

export default App;
