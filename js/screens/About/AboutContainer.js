import React from 'react';
import About from './About';
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import { Text } from 'react-native';

const ALL_CONDUCTS_QUERY = gql`
  {
    allConducts {
        id
        title
        description
      }
  }
`

const AboutContainer = () => {
    return (
        <Query query={ALL_CONDUCTS_QUERY}>
            {({ loading, error, data }) => {
                // console.log(loading, error, data);
                if (loading) return <Text>Loading...</Text>;
                if (error) return <Text>Error :(</Text>;

                return <About
                    title1="Date & Venue"
                    title2="Code of Conduct"
                    description1="R10 is a conference that focuses on just about any topic related to dev."
                    description2="The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC."
                    data={data}
                />

            }}
        </Query>

    )
}

export default AboutContainer