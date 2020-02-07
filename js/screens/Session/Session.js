import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Button,
    StyleSheet
} from 'react-native';
import styles from './styles';
import moment from "moment";
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../../config/styles';
import LinearGradient from "react-native-linear-gradient";


const Session = ({ session, navigation, faveIds, addFaveSession, removeFaveSession }) => {
    // console.log("faveIds", faveIds);
    // console.log(addFaveSession);

    let buttonTitle;

    if (faveIds.indexOf(session.id) === -1) {
        buttonTitle = "Add to Faves";
    } else {
        buttonTitle = "Remove from Faves";
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Text style={styles.locationSession}>{session.location}</Text>
                    {(faveIds.indexOf(session.id) !== -1) && <Icon name={'ios-heart'} size={25} color={style.red.color} />}
                </View>
                <Text style={styles.titleSession}>{session.title}</Text>
                <Text style={styles.time}>{moment(session.startTime).format('LT')}</Text>
                <Text style={styles.descSession}>{session.description}</Text>
                <Text style={styles.presentedByText}>Presented by:</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Speaker', { speaker: session.speaker })}>
                    <View style={styles.speakerView}>
                        <Image
                            style={{ width: 80, height: 80, borderRadius: 50 }}
                            source={{ uri: session.speaker.image }}>
                        </Image>
                        <Text style={styles.speakerName}>{session.speaker.name}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            if (faveIds.indexOf(session.id) === -1) {
                                addFaveSession(session.id);
                            } else {
                                removeFaveSession(session.id);
                            }
                        }}

                    >
                        <Text style={styles.buttonTitle}>{buttonTitle}</Text>
                        <LinearGradient
                            colors={[style.purple.color, style.blue.color]}
                            start={{ x: 0.0, y: 1.0 }}
                            end={{ x: 1.0, y: 0.0 }}
                            style={styles.linearGradient}

                            style={[StyleSheet.absoluteFill, { height: 60, width: '70%', borderRadius: 30, marginHorizontal: 55 }]}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    );
};

export default withNavigation(Session);