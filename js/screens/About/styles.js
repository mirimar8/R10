import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import style from '../../config/styles';

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        marginTop: 28,
        fontSize: 28,
        fontWeight: '600',
        color: 'black',
        fontFamily: style.mainFontRegular.fontFamily,
    },
    sectionDescription: {
        marginTop: 25,
        fontSize: 20,
        color: 'black',
        fontFamily: style.mainFontLight.fontFamily,

    },
    // R10image: {


    // },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 30,
    }

});

export default styles;