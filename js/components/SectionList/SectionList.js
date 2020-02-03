import React from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './styles';


const SectionList = ({ favesId, data }) => {
    return (
        <View >
            <FlatList
                data={data.allSessions}
                renderItem={({ item }) => (
                    <View style={styles.sessionContainer}>
                        <Text style={styles.time}>{item.startTime}</Text>
                        <Text style={styles.titleSession}>{item.title}</Text>
                        <Text style={styles.locationSession}>{item.location}</Text>
                    </View>)}
            />

        </View>
    );
}

export default SectionList;