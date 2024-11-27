import {
    View,
    Image,
    Text, Button,
    StyleSheet, TouchableOpacity, FlatList,
    TextInput
}
    from "react-native";
import { Dimensions, Platform, StatusBar } from 'react-native';
import deviceDimensions from "../../utils/DeviceDimensions";
import { theme } from "../../styles";
const { colors, fontFamily, fontSize } = theme
const { deviceHeight, deviceWidth } = deviceDimensions

const styles = StyleSheet.create({
    container: {
        height: deviceHeight * 0.14,
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
       //   backgroundColor:'blue'

    },

    dropdown: {
        borderColor: 'black',
        width: deviceWidth * 0.80,
        height: deviceHeight * 0.06,
        borderWidth: 0.5,
        borderRadius: 8,
        color: 'black'
    },

    label: {
        position: 'absolute',
        color: 'black',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: fontSize.h6,
        marginLeft: 10,
        color: colors.white_100
    },
    // selectedTextStyle: {
    //     fontSize: 16,
    //     color: 'black'
    // },

    textStyle: {
        fontSize: 11,
        color: '#2667C9',
        fontWeight: '500'
    },
    itemTextStyle: {
        color: colors.BLACK,
        fontSize: fontSize.p,
        fontFamily:fontFamily.P_REGULAR

    },
    headingLabelView: {
        textAlign: 'left',
        height: deviceHeight * 0.05,
        width: deviceWidth * 0.80,
        justifyContent: 'center'


    },
    headingLabelStyle: {
        color: colors.gray_600
    },
    menuDownIcon: {

        right: 10,
    },
    inputSearchStyle:{
        color: colors.BLACK,
        fontSize: fontSize.p,
        fontFamily:fontFamily.P_REGULAR
  
    }

})
export default styles