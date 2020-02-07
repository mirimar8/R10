import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import style from '../../config/styles';

const styles = StyleSheet.create({

    speakerContainer: {
        padding: 30,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        height: 1000,
    },
    outsideContainer: {
        paddingLeft: 30,
        paddingTop: 40,
        paddingBottom: 40,
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    container: {
        backgroundColor: 'black',
    },
    headerText: {
        fontFamily: style.mainFontLight.fontFamily,
        fontSize: 22,
        fontWeight: '600',
        color: 'white',
        paddingLeft: 60,
        paddingTop: 10,
    },
    speakerName: {
        paddingVertical: 25,
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 35,
        fontFamily: style.mainFontRegular.fontFamily,
    },
    speakerBio: {
        fontFamily: style.mainFontLight.fontFamily,
        fontSize: 20,
        lineHeight: 30,
    },
    buttonTitle: {
        zIndex: 1000,
        textAlign: 'center',
        fontSize: 22,
        fontFamily: style.mainFontRegular.fontFamily,
        color: '#ffffff',
        paddingVertical: 15,
        // paddingHorizontal: 20,
    },
    buttonContainer: {
        textAlign: 'center',
        paddingHorizontal: 0,
        paddingTop: 30,
    },

});

export default styles;