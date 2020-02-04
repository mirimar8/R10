import React from 'react';
import { Text, View, FlatList, SectionList } from 'react-native';
import styles from './styles';
import { formatSessionData } from '../../helpers';
import moment from "moment";




const SessionList = ({ favesId, data }) => {
    return (
        <View >
            <SectionList
                sections={formatSessionData(data.allSessions)}
                renderItem={({ item }) => (
                    <View style={styles.sessionContainer}>
                        <Text style={styles.titleSession}>{item.title}</Text>
                        <Text style={styles.locationSession}>{item.location}</Text>
                    </View>)}
                renderSectionHeader={({ section }) =>
                    <Text style={styles.sectionHeader}>{moment(section.title).format('LT')}</Text>}
                keyExtractor={(item, index) => index}
            />


            {/* <FlatList
                data={data.allSessions}
                renderItem={({ item }) => (
                    <View style={styles.sessionContainer}>
                        <Text style={styles.time}>{item.startTime}</Text>
                        <Text style={styles.titleSession}>{item.title}</Text>
                        <Text style={styles.locationSession}>{item.location}</Text>
                    </View>)}
            /> */}

        </View>
    );
}

export default SessionList;