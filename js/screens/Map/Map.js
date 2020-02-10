import React, { Component } from 'react';
// import {
//     ScrollView,
//     View,
//     Text,
// } from 'react-native';
import
MapView
    // { PROVIDER_GOOGLE }
    from 'react-native-maps';
// import styles from './styles';

class Map extends Component {
    render() {
        return (
            <MapView
                // provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                region={{
                    latitude: 42.882004,
                    longitude: 74.582748,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                showsUserLocation={true}
            />
        );
    }
}

// const Map = () => {
//     return (
//         <ScrollView>
//             <View >
//                 <Text>Map screen</Text>
//             </View>
//         </ScrollView >
//     );
// };

export default Map;
