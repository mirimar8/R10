import React from 'react';
import Schedule from './Schedule';
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import { Text } from 'react-native';
import { FavesContext } from '../../context/FavesContext';


const ALL_SESSIONS_QUERY = gql`
  {
    allSessions {
        id
        description
        location
        startTime
        title
        speaker {
            id
            bio
            image
            name
            url
        }
      }
  }
`

const ScheduleContainer = () => {
    return (
        <FavesContext.Consumer>
            {({ faveIds, addFaveSession, removeFaveSession }) => {
                return (
                    <Query query={ALL_SESSIONS_QUERY}>
                        {({ loading, error, data }) => {
                            if (loading) return <Text>Loading...</Text>;
                            if (error) return <Text>Error :(</Text>;
                            return (
                                <Schedule
                                    addFaveSession={addFaveSession}
                                    removeFaveSession={removeFaveSession}
                                    faveIds={faveIds}
                                    data={data.allSessions}
                                />
                            )
                        }}
                    </Query>
                )
            }}
        </FavesContext.Consumer>
    )
}

export default ScheduleContainer;