import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native';
import styles from './styles';
import moment from "moment";
import { withNavigation } from 'react-navigation';

const Session = ({ session, navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>{session.location}</Text>
                <Text>{session.title}</Text>
                <Text>{moment(session.startTime).format('LT')}</Text>
                <Text>{session.description}</Text>
                <Text>Presented by:</Text>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: session.speaker.image }}>
                </Image>
                <TouchableHighlight onPress={() => navigation.navigate('Speaker', { speaker: session.speaker })}>
                    <Text>{session.speaker.name}</Text>
                </TouchableHighlight>

            </View>
        </ScrollView >
    );
};

export default withNavigation(Session);