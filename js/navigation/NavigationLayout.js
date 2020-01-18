import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import About from '../screens/About';
import Schedule from '../screens/Schedule/Schedule';


const AboutStack = createStackNavigator({
    About: About,
});

const ScheduleStack = createStackNavigator({
    Schedule: Schedule,
});


export default createBottomTabNavigator(
    {
        About: AboutStack,
        Schedule: ScheduleStack,
    },
);