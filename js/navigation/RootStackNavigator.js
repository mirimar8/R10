import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

import React from 'react';
import About from '../screens/About'


const RootStackNavigator = createStackNavigator(
    {
        About: About
    },

);

export default createAppContainer(RootStackNavigator);