import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavContainer from './src/navigation';
import GlobalProvider from './src/context/Provider';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
