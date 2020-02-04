import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList
} from 'react-native';
import styles from './styles';
import SessionList from '../../components/SessionList/SessionList';


const Faves = ({ data, favesId }) => {
    return (
        <ScrollView>
            <View >
                <SessionList data={data} />
            </View>
        </ScrollView >
    );
};

export default Faves;