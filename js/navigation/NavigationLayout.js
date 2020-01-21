import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import About from '../screens/About';
import Faves from '../screens/Faves/Faves';
import Map from '../screens/Map/Map';
import Schedule from '../screens/Schedule/Schedule';


const AboutStack = createStackNavigator({
    About: About,
});

const FavesStack = createStackNavigator({
    Faves: Faves,
});

const MapStack = createStackNavigator({
    Map: Map,
});

const ScheduleStack = createStackNavigator({
    Schedule: Schedule,
});


export default createBottomTabNavigator(
    {
        Schedule: ScheduleStack,
        Map: MapStack,
        Faves: FavesStack,
        About: AboutStack,
    },
    {
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#999999',
            labelStyle: {
                fontSize: 15,
            },
            style: {
                backgroundColor: 'black',
            },
        }
    },
    {
        initialRouteName: 'About',
    },



);