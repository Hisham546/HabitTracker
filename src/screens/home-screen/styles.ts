import { StyleSheet } from "react-native";

import deviceDimensions from "../../utils/DeviceDimensions";
import { theme } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    calendarView: {
        width: deviceDimensions.deviceWidth,
        height: deviceDimensions.deviceHeight * 0.20,
      //  backgroundColor: theme.colors.BLUE
    },
    centerView: {


    }


})

export default styles;