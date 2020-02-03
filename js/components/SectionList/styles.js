import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import style from '../../config/styles';

const styles = StyleSheet.create({

    sessionContainer: {

    },
    titleSession: {
        marginTop: 20,
        paddingHorizontal: 24,
        color: 'black',
        fontWeight: '600',
        fontSize: 20,
        fontFamily: style.mainFontRegular.fontFamily,
    },
    locationSession: {
        marginTop: 10,
        paddingHorizontal: 24,
        color: style.mediumGrey.color,
        fontWeight: '400',
        fontSize: 18,
        fontFamily: style.mainFontRegular.fontFamily,
    }
});

export default styles;