
import React from 'react';
import client from './config/api'
import AboutContainer from './screens/About';
import { ApolloProvider } from '@apollo/react-hooks';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AboutContainer />
    </ApolloProvider>

  );
};



export default App;
