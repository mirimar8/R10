import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList
} from 'react-native';
import styles from './styles';
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