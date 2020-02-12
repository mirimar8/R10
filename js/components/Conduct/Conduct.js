import React, { Component } from 'react';
import { Text, View, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
import styles from './styles';

class Conduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    changeLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
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
                </View >
            </View >
        );
    }
}

export default Conduct;