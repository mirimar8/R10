import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList
} from 'react-native';
import styles from './styles';
import SectionList from '../../components/SectionList/SectionList';


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