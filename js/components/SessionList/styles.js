import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import style from '../../config/styles';

const styles = StyleSheet.create({

    sessionContainer: {
        borderBottomColor: style.grey.color,
        borderBottomWidth: 1.5,
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
        paddingHorizontal: 24,
        color: style.mediumGrey.color,
        fontWeight: '400',
        fontSize: 18,
        fontFamily: style.mainFontRegular.fontFamily,
    },
    sectionHeader: {
        fontFamily: style.mainFontRegular.fontFamily,
        fontWeight: '500',
        fontSize: 18,
        paddingHorizontal: 24,
        backgroundColor: style.grey.color,
        paddingVertical: 8,
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 15,
        paddingVertical: 10,
    },

});

export default styles;