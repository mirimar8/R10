import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList,
} from 'react-native';
// import Conduct from '../../components/Conduct';
import styles from './styles';

const About = ({ title1, title2, description1, description2, data }) => {
    return (
        <ScrollView>
            <View style={styles.sectionContainer}>

                <Text style={styles.sectionDescription}>{description1}</Text>
                <Text style={styles.sectionTitle}>{title1}</Text>
                <Text style={styles.sectionDescription}>{description2}</Text>
                <Text style={styles.sectionTitle}>{title2}</Text>
            </View>
            <View style={styles.listContainer}>
                {data.allConducts.map(conduct => (
                    <FlatList
                        key={conduct.id}
                        renderItem={({ listItem }) => <Text>{listItem.key}</Text>}
                        data={conduct}
                    />
                ))
                }
            </View>

            {/* <View style={styles.container}>
                <FlatList
                    data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                        { key: 'Dominic' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View> */}
        </ScrollView >

    );
};

export default About;