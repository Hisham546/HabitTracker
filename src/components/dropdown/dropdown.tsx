
import React from "react";
import { View, Text, TouchableOpacity, TouchableHighlight, ViewStyle, TextStyle, KeyboardTypeOptions } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles";
import { theme } from "../../styles";
const { colors, fontFamily, fontSize } = theme

export const CustomDropdown = (props) => {
    const {
        onChange,
        value,
        data,
        headingLabel,
        labelstyle,
        showIcon = false,
        onIconClick,
        dropdownStyle,
        dropdownIconStyle,
        mainDropdownContainer,
        selectedTextStyle,
        placeholderStyles,
        placeholderText,
        showLabel = false,
        search = false,
        searchPlaceholder,
        isError = false
    } = props;

    return (



        <View style={[styles.container, mainDropdownContainer]}>
            {showLabel ?
                <View style={styles.headingLabelView}>
                    <Text style={[styles.headingLabelStyle, labelstyle]}>{headingLabel}</Text>
                </View>
                : null}

            <Dropdown
                style={[styles.dropdown, dropdownStyle, isError && { borderColor: colors.red }]}
                placeholderStyle={[styles.placeholderStyle, placeholderStyles]}
                selectedTextStyle={selectedTextStyle}
                itemTextStyle={styles.itemTextStyle}
                data={data || []}
                maxHeight={200}
                labelField="label"
                valueField="value"
                search={search}
                searchPlaceholder={searchPlaceholder}
                dropdownPosition='bottom'
                inputSearchStyle={styles.inputSearchStyle}
                placeholder={placeholderText}

                value={value}

                onChange={item => onChange(item)}
                renderRightIcon={() => (
                    <MaterialIcon name="menu-down" size={20} color={colors.DARK_SLATE_GRAY} style={[styles.menuDownIcon, dropdownIconStyle]} />
                )}
            />
            {/* {showIcon && (
                <TouchableOpacity onPress={onIconClick} style={styles.iconContainer}>
                    <MaterialIcon name="plus-circle" size={19} color="#2667C9" style={styles.plusButton} />
                </TouchableOpacity>
            )} */}
        </View>

    )


}

