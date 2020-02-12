import { createAppContainer } from 'react-navigation';
import NavigationLayout from './NavigationLayout';
import SpeakerScreen from '../screens/Speaker';
import { createStackNavigator } from 'react-navigation-stack';

export default createAppContainer(
    createStackNavigator(
        {
            Layout: NavigationLayout,
            Speaker: SpeakerScreen
        },
        {
            mode: 'modal',
            headerMode: 'none',
        }
    )
);