import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList
} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import SectionList from '../../components/SectionList/SectionList';

const Schedule = ({ data }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <SectionList data={data} />
                {/* <FlatList
                    data={data.allSessions}
                    renderItem={({ item }) => (
                        <View style={styles.container}>
                            <Text style={styles.titleSession}>{item.title}</Text>
                            <Text style={styles.locationSession}>{item.location}</Text>
                        </View>)}
                /> */}
            </View>
        </ScrollView >
    );
};

export default Schedule;