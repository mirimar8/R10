import React from 'react';
import Session from './Session';
import { withNavigation } from 'react-navigation';

const SessionContainer = ({ navigation }) => {

    let session = navigation.getParam('item');
    return (
        <Session session={session} />
    )
}

export default withNavigation(SessionContainer);