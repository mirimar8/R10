import React from 'react';
import { Text, View, SectionList, TouchableHighlight } from 'react-native';
import styles from './styles';
import { formatSessionData } from '../../helpers';
import moment from "moment";
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';



const SessionList = ({ faveIds, data, navigation }) => {
    console.log('sessionlistfaves', faveIds);
    return (
        <View >
            <SectionList
                sections={formatSessionData(data)}
                renderItem={({ item }) => (
                    <TouchableHighlight onPress={() => navigation.navigate('Session', { item })}>
                        <View style={styles.sessionContainer}>
                            <Text style={styles.titleSession}>{item.title}</Text>
                            <Text style={styles.locationSession}>{item.location}</Text>
                            {faveIds.indexOf(item.id) !== -1 && <Icon name={'ios-heart'} size={25} color={'red'} />}
                        </View>
                    </TouchableHighlight>
                )}

                renderSectionHeader={({ section }) =>
                    <Text style={styles.sectionHeader}>{moment(section.title).format('LT')}</Text>}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
}

export default withNavigation(SessionList);