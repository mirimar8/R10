import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import style from '../../config/styles';

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 10,
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
    R10image: {
        marginBottom: 30,
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 40,
        borderBottomColor: style.lightGrey.color,
        borderBottomWidth: 2,
        marginHorizontal: 20,

    },
    footerContainer: {
        borderTopColor: style.lightGrey.color,
        borderTopWidth: 2,
        marginHorizontal: 20,
        marginVertical: 20,
    },
    footer: {
        fontSize: 20,
        fontFamily: style.mainFontLight.fontFamily,
        marginVertical: 20,
    }

});

export default styles;