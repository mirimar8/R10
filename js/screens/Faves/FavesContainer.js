import React from 'react';
import Faves from './Faves';
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import { FavesContext } from '../../context/FavesContext';
import { Text } from 'react-native';

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

const FavesContainer = () => {
    return (
        <FavesContext.Consumer>
            {({ faveIds, addFaveSession, removeFaveSession }) => {
                return (
                    <Query query={ALL_SESSIONS_QUERY}>
                        {({ loading, error, data }) => {
                            if (loading) return <Text>Loading...</Text>;
                            if (error) return <Text>Error :(</Text>;
                            return (
                                <Faves
                                    addFaveSession={addFaveSession}
                                    removeFaveSession={removeFaveSession}
                                    faveIds={faveIds}
                                    data={data.allSessions.filter(session =>
                                        faveIds.includes(session.id)
                                    )}
                                />
                            )
                        }}
                    </Query>
                )
            }}
        </FavesContext.Consumer>
    )
}

export default FavesContainer;