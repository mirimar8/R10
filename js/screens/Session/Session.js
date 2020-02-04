import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList
} from 'react-native';
import styles from './styles';
import SessionList from '../../components/SessionList/SessionList';

const Session = ({ data }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Session Screen</Text>
            </View>
        </ScrollView >
    );
};

export default Session;