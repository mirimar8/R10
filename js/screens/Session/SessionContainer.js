import React from 'react';
import Session from './Session';
import { withNavigation } from 'react-navigation';
import { FavesContext } from '../../context/FavesContext';

const SessionContainer = ({ navigation }) => {

    let session = navigation.getParam('item');
    return (
        <FavesContext.Consumer>
            {({ addFaveSession, faveIds, removeFaveSession }) => {
                return (
                    <Session
                        session={session}
                        addFaveSession={addFaveSession}
                        removeFaveSession={removeFaveSession}
                        faveIds={faveIds}
                    />
                )
            }}

        </FavesContext.Consumer>

    )
}

export default withNavigation(SessionContainer);