import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity, Animated } from 'react-native';
import styles from './styles';


// const Conduct = ({ data }) => {
//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={data.allConducts}
//                 renderItem={({ item }) => (
//                     <View>
//                         <Text style={styles.titleConduct}>{item.title}</Text>
//                         <Text style={styles.descConduct}>{item.description}</Text>
//                     </View>)}
//             />
//         </View>
//     )
// }


class Conduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            // translateValue: Animated.ValueXY(),
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    changeLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded });
    }

    // animateCircle = () => {
    //     Animated.spring(
    //         this.state.translateValue,
    //         { toValue: { x: 50, y: 100 } },
    //     ).start();
    // }

    render() {
        // let animatedStyles = {
        //     transform: [
        //         { translateX: this.state.translateValue.x },
        //         { translateY: this.state.translateValue.y }
        //     ]
        // };
        const { item } = this.props;
        return (

            <View style={styles.container}>
                <View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={this.changeLayout}
                        style={styles.titleContainer}
                    >

                        <Text style={styles.icon}>{this.state.expanded ? '-' : '+'}</Text>
                        <Text style={styles.titleConduct}>
                            {item.title}
                        </Text>

                    </TouchableOpacity>
                    <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
                        <Text style={styles.descConduct}>{item.description}</Text>
                    </View>
                    <View>
                        {/* <TouchableWithoutFeedback onPress={this.onCirclePress}>
                            <Animated.View style={[styles.circle, animatedStyles]} />
                        </TouchableWithoutFeedback> */}
                    </View>
                </View >

            </View >

        );
    }
}

export default Conduct;