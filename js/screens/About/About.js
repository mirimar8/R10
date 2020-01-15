import React from 'react';
import {
    ScrollView,
    View,
    Text,
} from 'react-native';

import styles from './styles';

const About = ({ title, description }) => {
    return (
        <View style={styles.sectionContainer}>
            <ScrollView>
                <Text style={styles.sectionTitle}>{title}</Text>
                <Text style={styles.sectionDescription}>{description}</Text>
            </ScrollView>
        </View>
    )
}

export default About;