import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import About from '../screens/About';
import Faves from '../screens/Faves';
import Map from '../screens/Map/Map';
import Schedule from '../screens/Schedule';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { sharedNavigationOptions } from "./config";


const AboutStack = createStackNavigator(
    {
        About: About,
    },
    // {
    //     defaultNavigationOptions: ({ navigation }) => ({
    //         ...sharedNavigationOptions(navigation)
    //     })
    // }
);

const FavesStack = createStackNavigator(
    {
        Faves: Faves,
    },
    // {
    //     defaultNavigationOptions: ({ navigation }) => ({
    //         ...sharedNavigationOptions(navigation)
    //     })
    // }
);

const MapStack = createStackNavigator(
    {
        Map: Map,
    },
    // {
    //     defaultNavigationOptions: ({ navigation }) => ({
    //         ...sharedNavigationOptions(navigation)
    //     })
    // }
);

const ScheduleStack = createStackNavigator(
    {
        Schedule: Schedule,
    },
    // {
    //     defaultNavigationOptions: ({ navigation }) => ({
    //         ...sharedNavigationOptions(navigation)
    //     })
    // }
);


export default createBottomTabNavigator(
    {
        Schedule: ScheduleStack,
        Map: MapStack,
        Faves: FavesStack,
        About: AboutStack,
    },
    {
        // defaultNavigationOptions: ({ navigation }) => ({
        //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
        //         const { routeName } = navigation.state;
        //         let IconComponent = Ionicons;
        //         let iconName;
        //         if (routeName === 'Schedule') {
        //             iconName = 'ios-calendar'
        //         } else if (routeName === 'About') {
        //             iconName = 'ios-information-circle'
        //         } else if (routeName === 'Faves') {
        //             iconName = 'ios-heart-empty'
        //         } else if (routeName === 'Map') {
        //             iconName = 'ios-map'
        //         }

        //         // You can return any component that you like here!
        //         return <IconComponent name={iconName} size={25} color={tintColor} />;
        //     },
        // }),
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#999999',
            labelStyle: {
                fontSize: 15,
                fontFamily: 'Montserrat-Light'
            },
            style: {
                backgroundColor: 'black',
            },
        },
        // initialRouteName: 'About'
    },


);