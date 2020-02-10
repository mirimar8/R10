import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Button,
    Linking,
    StyleSheet,
    Platform,

} from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../../config/styles';
import LinearGradient from "react-native-linear-gradient";



const Speaker = ({ speaker, navigation }) => {

    return (

        <ScrollView style={styles.container}>

            <View style={styles.outsideContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'} size={50} color={'white'} />
                </TouchableOpacity>
                <Text style={styles.headerText}>About the Speaker</Text>
            </View>
            <View style={styles.speakerContainer}  >

                <Image
                    style={{ width: 130, height: 130, borderRadius: 70, marginLeft: 70 }}
                    source={{ uri: speaker.image }}
                />
                <Text style={styles.speakerName}>{speaker.name}</Text>
                <Text style={styles.speakerBio}>{speaker.bio}</Text>

                <View style={styles.buttonContainer}>

                    <TouchableOpacity
                        onPress={() => { Linking.openURL(speaker.url) }}
                    >
                        <Text style={styles.buttonTitle}>Read More On Wikipedia</Text>

                        {/* <LinearGradient
                            colors={[style.purple.color, style.blue.color]}
                            start={{ x: 0.0, y: 1.0 }}
                            end={{ x: 1.0, y: 0.0 }}
                            style={[StyleSheet.absoluteFill, { height: 60, width: '100%', borderRadius: 30 }]}
                        /> */}
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    );
};

export default withNavigation(Speaker);