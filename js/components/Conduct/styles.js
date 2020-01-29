import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import style from '../../config/styles';

const styles = StyleSheet.create({
    titleConduct: {
        marginTop: 20,
        paddingHorizontal: 24,
        color: style.purple.color,
        fontWeight: '600',
        fontSize: 20,
        fontFamily: style.mainFontRegular.fontFamily,

    },
    descConduct: {
        marginTop: 20,
        paddingHorizontal: 24,
        color: 'black',
        // fontWeight: '400',
        fontSize: 20,
        fontFamily: style.mainFontLight.fontFamily,

    }

});

export default styles;