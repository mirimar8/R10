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
    console.log("faves contaner");
    return (
        <FavesContext.Consumer>
            {({ faveIds, addFaveSession, removeFaveSession }) => {
                // console.log("in the faves context");
                // console.log(faveIds, addFaveSession, removeFaveSession);
                return (
                    <Query query={ALL_SESSIONS_QUERY}>
                        {({ loading, error, data }) => {
                            //console.log(loading, error, data);
                            // console.log("here");
                            // console.log(data.allSessions.filter(session =>
                            //     faveIds.includes(session.id)
                            // ))
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