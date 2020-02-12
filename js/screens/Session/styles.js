import { StyleSheet } from 'react-native';
import style from '../../config/styles';

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    locationSession: {
        color: style.mediumGrey.color,
        fontWeight: '400',
        fontSize: 20,
        fontFamily: style.mainFontRegular.fontFamily,
    },
    titleSession: {
        marginTop: 20,
        color: 'black',
        fontWeight: '400',
        fontSize: 35,
        fontFamily: style.mainFontRegular.fontFamily,
    },
    time: {
        color: style.red.color,
        fontFamily: style.mainFontRegular.fontFamily,
        fontWeight: '500',
        fontSize: 20,
        paddingVertical: 15,
    },
    descSession: {
        fontFamily: style.mainFontLight.fontFamily,
        fontSize: 25,
        lineHeight: 35,
    },
    presentedByText: {
        color: style.mediumGrey.color,
        fontWeight: '400',
        fontSize: 20,
        fontFamily: style.mainFontRegular.fontFamily,
        paddingTop: 30,
        paddingBottom: 15,
    },
    speakerView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomColor: style.grey.color,
        borderBottomWidth: 1.5,
        paddingBottom: 25,
    },
    speakerName: {
        paddingVertical: 25,
        paddingLeft: 20,
        fontWeight: '400',
        fontSize: 20,
        fontFamily: style.mainFontRegular.fontFamily,
    },
    buttonTitle: {
        zIndex: 1000,
        textAlign: 'center',
        fontSize: 22,
        fontFamily: style.mainFontRegular.fontFamily,
        color: '#ffffff',
        paddingVertical: 15,
    },
    buttonContainer: {
        textAlign: 'center',
        paddingHorizontal: 0,
        paddingTop: 30,
    },
});

export default styles;