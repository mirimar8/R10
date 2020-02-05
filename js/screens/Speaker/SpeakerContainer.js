import React from 'react';
import Speaker from './Speaker';
import { withNavigation } from 'react-navigation';

const SpeakerContainer = ({ navigation }) => {

    let speaker = navigation.getParam('speaker');

    return (
        <Speaker speaker={speaker} />
    )
}

export default withNavigation(SpeakerContainer);