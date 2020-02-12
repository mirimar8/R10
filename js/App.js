
import React from 'react';
import client from './config/api'
import { ApolloProvider } from '@apollo/react-hooks';
import RootStackNavigator from './navigation/RootStackNavigator';
import model from './config/model';
import FavesProvider from './context/FavesContext';

const App = () => {
  return (
    <FavesProvider>
      < ApolloProvider client={client} >
        <RootStackNavigator />
      </ApolloProvider >
    </FavesProvider>
  );
};

export default App;
