import React from 'react';
import {
    ScrollView,
    View
} from 'react-native';
import SessionList from '../../components/SessionList/SessionList';

const Faves = ({ data, faveIds, addFaveSession, removeFaveSession }) => {
    return (
        <ScrollView>
            <View >
                <SessionList
                    addFaveSession={addFaveSession}
                    removeFaveSession={removeFaveSession}
                    faveIds={faveIds}
                    data={data} />
            </View>
        </ScrollView >
    );
};

export default Faves;