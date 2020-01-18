import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import About from '../screens/About';

const AboutStack = createStackNavigator({
    About: About
});
// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator(AboutStack);