import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    FlatList

} from 'react-native';
import styles from './styles';
import Conduct from '../../components/Conduct/Conduct';

const About = ({ title1, title2, description1, description2, data, conduct }) => {
    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.R10image}
                    source={require('../../../assets/images/r10_logo.png')}
                />
            </View>


            <View style={styles.sectionContainer}>

                <Text style={styles.sectionDescription}>{description1}</Text>
                <Text style={styles.sectionTitle}>{title1}</Text>
                <Text style={styles.sectionDescription}>{description2}</Text>
                <Text style={styles.sectionTitle}>{title2}</Text>
            </View>

            <View style={styles.container}>
                <FlatList
                    data={data.allConducts}
                    renderItem={({ item }) => (
                        <Conduct item={item} />
                    )}
                />
            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.footer}>{'\u00A9'} RED Academy 2017</Text>
            </View>
        </ScrollView >

    );
};

export default About;