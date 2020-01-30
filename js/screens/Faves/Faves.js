import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList
} from 'react-native';
import styles from './styles';

const Faves = ({ data, favesId }) => {
    return (
        <ScrollView>
            <View >
                <SectionList data={data} />
            </View>
        </ScrollView >
    );
};

export default Faves;