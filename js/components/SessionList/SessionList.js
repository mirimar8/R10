import React from 'react';
import { Text, View, SectionList, TouchableHighlight } from 'react-native';
import styles from './styles';
import { formatSessionData } from '../../helpers';
import moment from "moment";
import { withNavigation } from 'react-navigation';


const SessionList = ({ faveIds, data, navigation }) => {
    return (
        <View >
            <SectionList
                sections={formatSessionData(data)}
                renderItem={({ item }) => (
                    <TouchableHighlight onPress={() => navigation.navigate('Session', { item })}>
                        <View style={styles.sessionContainer}>
                            <Text style={styles.titleSession}>{item.title}</Text>
                            <Text style={styles.locationSession}>{item.location}</Text>
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