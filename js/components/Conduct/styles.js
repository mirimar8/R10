import { StyleSheet } from 'react-native';
import style from '../../config/styles';

const styles = StyleSheet.create({
    titleConduct: {
        marginTop: 20,
        paddingHorizontal: 12,
        color: style.purple.color,
        fontWeight: '600',
        fontSize: 20,
        fontFamily: style.mainFontRegular.fontFamily,

    },
    descConduct: {
        marginTop: 20,
        paddingHorizontal: 24,
        color: 'black',
        fontSize: 20,
        fontFamily: style.mainFontLight.fontFamily,

    },
    icon: {
        marginTop: 20,
        marginLeft: 20,
        color: style.purple.color,
        fontWeight: '600',
        fontSize: 20,

    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    }

});

export default styles;