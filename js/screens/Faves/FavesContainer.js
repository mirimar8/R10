import React from 'react';
import Faves from './Faves';
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import { FavesContext } from '../../context/FavesContext';

const ALL_SESSIONS_QUERY = gql`
  {
    allSessions {
        id
        description
        location
        startTime
        title
      }
  }
`

const FavesContainer = () => {
    return (
        <FavesContext.Consumer>
            {({ favesId, addFaveSession, removeFaveSession }) => {
                <Query query={ALL_SESSIONS_QUERY}>
                    {({ loading, error, data }) => {
                        console.log(loading, error, data);
                        if (loading) return <Text>Loading...</Text>;
                        if (error) return <Text>Error :(</Text>;
                        return (
                            <Faves
                                addFaveSession={addFaveSession}
                                removeFaveSession={removeFaveSession}
                                favesId={favesId}
                                data={data.allSessions.filter(session =>
                                    favesId.includes(session.id)
                                )} />
                        )
                    }}
                </Query>
            }}
        </FavesContext.Consumer>
    )
}

export default FavesContainer;