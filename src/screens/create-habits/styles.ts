import { StyleSheet } from "react-native";

import deviceDimensions from "../../utils/DeviceDimensions";
import { theme } from "../../styles";
const { colors, fontFamily, fontSize } = theme
const { deviceHeight, deviceWidth } = deviceDimensions
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdfcf7'
    },


    centerView: {


    },
    header: {
        width: deviceWidth,
        height: deviceHeight * 0.10,
          alignItems:'center',
          flexDirection:'row'
    },

    labelstyle: {
        fontFamily: fontFamily.P_MEDIUM,
        color: colors.DARK_SLATE_GRAY,
    },
    selectedTextStyle: {
        color: colors.DARK_SLATE_GRAY,
        fontSize: fontSize.p,
        marginLeft: 10,
        fontFamily: fontFamily.P_REGULAR
    },
    placeholderStyles: {
        color: colors.DARK_SLATE_GRAY,
        fontFamily: fontFamily.P_REGULAR,
        fontSize: fontSize._13
    },
    parentContaineStyle: {
        height: deviceDimensions.deviceHeight * 0.12,
        width: deviceDimensions.deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInputStyle: {
        height: deviceDimensions.deviceHeight * 0.056,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.GRAY_20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: deviceDimensions.deviceWidth * 0.80,
        backgroundColor: colors.WHITE,
        color: colors.WHITE
    },
    descriptionView: {
        width: deviceDimensions.deviceWidth,
        height: deviceDimensions.deviceHeight * 0.40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    createHabit: {
        fontSize: fontSize.h5,
        color: colors.BLACK,
      

    }


})

export default styles;