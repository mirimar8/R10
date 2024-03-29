import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AboutScreen from '../screens/About';
import FavesScreen from '../screens/Faves';
import MapScreen from '../screens/Map/Map.ios';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import Icon from 'react-native-vector-icons/Ionicons';
import { sharedNavigationOptions } from "./config";

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


export default createBottomTabNavigator(
    {
        Schedule: ScheduleStack,
        Map: MapStack,
        Faves: FavesStack,
        About: AboutStack,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Schedule') {
                    iconName = 'ios-calendar'
                } else if (routeName === 'About') {
                    iconName = 'ios-information-circle'
                } else if (routeName === 'Faves') {
                    iconName = 'ios-heart'
                } else if (routeName === 'Map') {
                    iconName = 'ios-map'
                }

                return <Icon name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#999999',
            labelStyle: {
                fontSize: 15,
                fontFamily: 'Montserrat-Light',
                fontWeight: '600',

            },
            style: {
                backgroundColor: 'black',
                paddingTop: 7,
            },
            tabStyle: {
                height: 55,
            },
            labelPosition: 'below-icon',
        },
        initialRouteName: 'Schedule',
    },


);