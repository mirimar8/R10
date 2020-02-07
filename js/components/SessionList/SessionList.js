import React from 'react';
import { Text, View, SectionList } from 'react-native';
import styles from './styles';
import { formatSessionData } from '../../helpers';
import moment from "moment";
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../../config/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SessionList = ({ faveIds, data, navigation }) => {
    console.log('sessionlistfaves', faveIds);
    return (
        <View >
            <SectionList
                sections={formatSessionData(data)}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Session', { item })}>
                        <View style={styles.sessionContainer}>
                            <Text style={styles.titleSession}>{item.title}</Text>
                            <View style={styles.iconContainer}>
                                <Text style={styles.locationSession}>{item.location}</Text>
                                {faveIds.indexOf(item.id) !== -1 && <Icon name={'ios-heart'} size={22} color={style.red.color} />}
                            </View>
                        </View>
                    </TouchableOpacity>
                )}

                renderSectionHeader={({ section }) =>
                    <Text style={styles.sectionHeader}>{moment(section.title).format('LT')}</Text>}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
}

export default withNavigation(SessionList);