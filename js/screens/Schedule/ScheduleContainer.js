import React from 'react';
import Schedule from './Schedule';
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import { Text } from 'react-native';

const ALL_SESSIONS_QUERY = gql`
  {
    allSessions {
        id
        description
        location
        speaker
        startTime
        title
      }
  }
`

const ScheduleContainer = () => {
    console.log(hii);
    return (
        // <Text>HELLO</Text>
        <Query query={ALL_SESSIONS_QUERY}>
            {({ loading, error, data }) => {
                console.log(loading, error, data);
                if (loading) return <Text>Loading...</Text>;
                if (error) return <Text>Error :(</Text>;
                return (
                    <Schedule data={data} />
                )
            }}
        </Query>
    )
}

export default ScheduleContainer