import React from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './styles';


const Conduct = ({ conduct, data }) => {
    return (
        <View >
            <FlatList
                data={data.allConducts}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.titleConduct}>{item.title}</Text>
                        <Text style={styles.descConduct}>{item.description}</Text>
                    </View>)}
            />

        </View>
    );
}

export default Conduct;