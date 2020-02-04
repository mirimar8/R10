import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "react-navigation-stack";
import LinearGradient from "react-native-linear-gradient";

const GradientHeader = props => (
    <View style={{ backgroundColor: 'white', overflow: 'hidden' }}>
        <LinearGradient
            colors={['#cf392a', '#9963ea']}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[StyleSheet.absoluteFill, { height: 90, width: '100%' }]}
        />
        <Header {...props} />
    </View>
);

export const sharedNavigationOptions = navigation => ({
    headerBackTitle: null,
    header: props => <GradientHeader {...props} />,
    headerStyle: {
        backgroundColor: "transparent",


    },
    headerTitleStyle: {
        color: '#ffffff',
        fontSize: 25,
        fontFamily: 'Montserrat-Regular',
        paddingBottom: 20,
    }
});