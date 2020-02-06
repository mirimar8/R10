import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableHighlight,
    Button
} from 'react-native';
import styles from './styles';
import moment from "moment";
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../../config/styles';



const Session = ({ session, navigation, faveIds, addFaveSession, removeFaveSession }) => {
    // console.log("faveIds", faveIds);
    // console.log(addFaveSession);

    let buttonTitle;

    if (faveIds.indexOf(session.id) === -1) {
        buttonTitle = "Add Fave";
    } else {
        buttonTitle = "Remove Fave";
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>{session.location}</Text>
                {(faveIds.indexOf(session.id) !== -1) && <Icon name={'ios-heart'} size={25} color={style.red.color} />}

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

                <Button
                    onPress={() => {
                        if (faveIds.indexOf(session.id) === -1) {
                            addFaveSession(session.id);
                        } else {
                            removeFaveSession(session.id);
                        }
                    }}
                    title={buttonTitle} />

            </View>
        </ScrollView >
    );
};

export default withNavigation(Session);