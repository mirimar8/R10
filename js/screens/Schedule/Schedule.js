import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList
} from 'react-native';
import styles from './styles';
import SessionList from '../../components/SessionList/SessionList';

const Schedule = ({ data, faveIds, addFaveSession, removeFaveSession }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <SessionList
                    addFaveSession={addFaveSession}
                    removeFaveSession={removeFaveSession}
                    faveIds={faveIds}
                    data={data} />
            </View>
        </ScrollView >
    );
};

export default Schedule;