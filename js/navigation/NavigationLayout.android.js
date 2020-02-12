import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import AboutScreen from '../screens/About';
import FavesScreen from '../screens/Faves';
import MapScreen from '../screens/Map/Map.ios';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { sharedNavigationOptions } from "./config";
import style from '../config/styles';

const AboutStack = createStackNavigator(
    {
        About: AboutScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation)
        })
    }
);

const FavesStack = createStackNavigator(
    {
        Faves: FavesScreen,
        Session: SessionScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation)
        })
    }
);

const MapStack = createStackNavigator(
    {
        Map: MapScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation)
        })
    }
);

const ScheduleStack = createStackNavigator(
    {
        Schedule: ScheduleScreen,
        Session: SessionScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation)
        })
    }
);


export default createDrawerNavigator(
    {
        Schedule: ScheduleStack,
        Map: MapStack,
        Faves: FavesStack,
        About: AboutStack,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            drawerIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Schedule') {
                    iconName = 'md-calendar'
                } else if (routeName === 'About') {
                    iconName = 'md-information-circle'
                } else if (routeName === 'Faves') {
                    iconName = 'md-heart'
                } else if (routeName === 'Map') {
                    iconName = 'md-map'
                }

                return <Icon name={iconName} size={25} color={tintColor} />;
            },
        }),
        contentOptions: {
            activeTintColor: style.purple.color,
            inactiveTintColor: style.mediumGrey.color,
            labelStyle: {
                fontSize: 21,
                fontFamily: style.mainFontRegular.fontFamily,
                fontWeight: '600',
            }
        },

        initialRouteName: 'Schedule',
    },

);
