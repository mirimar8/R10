import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList
} from 'react-native';
import styles from './styles';
import SessionList from '../../components/SessionList/SessionList';

const Schedule = ({ data }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <SessionList data={data} />
            </View>
        </ScrollView >
    );
};

export default Schedule;