import React from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './styles';


const SessionList = ({ favesId, data }) => {
    return (
        <View >
            <FlatList
                data={data.allSessions}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.titleConduct}>{item.title}</Text>
                        <Text style={styles.descConduct}>{item.location}</Text>
                    </View>)}
            />

        </View>
    );
}

export default SessionList;