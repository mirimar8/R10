import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    Button,
    Linking

} from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';

const Speaker = ({ speaker, navigation }) => {

    return (

        <ScrollView>
            <View style={styles.outsideContainer}>
                <Button title='X' onPress={() => navigation.goBack()}></Button>
                <Text>About the Speaker</Text>
            </View>
            <View style={styles.speakerContainer} >

                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: speaker.image }}
                />
                <Text>{speaker.name}</Text>
                <Text>{speaker.bio}</Text>
                <Button
                    title='Read More On Wikipedia'
                    onPress={() => { Linking.openURL(speaker.url) }}>
                </Button>
            </View>
        </ScrollView >
    );
};

export default withNavigation(Speaker);