import React from "react";
import { StyleSheet, View, TouchableOpacity, Platform } from "react-native";
import { Header } from "react-navigation-stack";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../config/styles';

const Menu = ({ navigation }) => {
    const { routeName } = navigation.state;

    return routeName === 'Session' ? (
        <TouchableOpacity style={{ paddingLeft: 20 }} onPress={() => navigation.goBack()}>
            <Icon name={'md-arrow-back'} size={30} color={'white'} />
        </TouchableOpacity>
    ) : (
            <TouchableOpacity style={{ paddingLeft: 20 }} onPress={() => navigation.openDrawer()}>
                <Icon name={'md-menu'} size={30} color={'white'} />
            </TouchableOpacity>
        )
}

const GradientHeader = props => (
    <View style={{
        backgroundColor: 'white', overflow: 'hidden',
        ...Platform.select({
            android: {
                paddingVertical: 10,
            },
        })
    }}>
        <LinearGradient
            colors={[style.red.color, style.purple.color]}
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
        fontFamily: style.mainFontRegular.fontFamily,
    },
    headerBackTitleStyle: {
        display: 'none',

    },
    headerTintColor: '#ffffff',

    ...Platform.select({
        android: {
            headerLeft: () => <Menu navigation={navigation} />,
        },
    })

});