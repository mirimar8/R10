
import React from 'react';
import client from './config/api'
import AboutContainer from './screens/About';
import { ApolloProvider } from '@apollo/react-hooks';
import RootStackNavigator from './navigation/RootStackNavigator';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootStackNavigator />
      {/* <AboutContainer /> */}
    </ApolloProvider >
  );
};

export default App;
