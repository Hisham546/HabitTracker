




import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text, View, StyleSheet } from 'react-native';
import { theme } from '../styles';
import { Icon } from '../utils/Icon';
import HomeScreen from '../screens/home-screen';
import CreateHabits from '../screens/create-habits';
const Tab = createBottomTabNavigator();

export default function BottomTabs({ }) {




  return (
    <Tab.Navigator initialRouteName="HomeScreen" backBehavior="initialRoute"
      screenOptions={{

        tabBarShowLabel: true,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIconStyle: styles.tabBarIconStyle,
        tabBarStyle: {
          ...styles.tabContainerStyle,
          borderTopWidth: 0,  // This removes the top border line
          elevation: 0,       // Removes the shadow in Android
          shadowOpacity: 0,   // Removes shadow in iOS
        },
        tabBarLabelStyle: styles.tabBarLabelStyle
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen}

        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.activeLine} />}

              <Icon

                iconFamily={'AntDesign'}
                size={23}
                style={{ color: 'black' }}
                name={'home'}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => focused ? <Text style={styles.tabBarLabelStyle}>Home</Text> : null,
        }} />


      <Tab.Screen name="CreateHabits" component={CreateHabits}

        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.activeLine} />}

              <Icon

                iconFamily={'AntDesign'}
                size={23}
                style={{ color: 'black' }}
                name={'pluscircleo'}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => focused ? <Text style={styles.tabBarLabelStyle}>Home</Text> : null,
        }} />


     


    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({

  tabBarIconStyle: {
    marginTop: 1

  },
  tabContainerStyle: {

    backgroundColor: 'white',


    minHeight: 2,
  },
  tabBarLabelStyle: {
    fontFamily: theme.fontFamily.P_MEDIUM,
    fontSize: theme.fontSize.small,

    color: theme.colors.BLACK
  },
  iconContainer: {
    alignItems: 'center',
  },
  activeLine: {
    position: 'absolute',
    top: -5,
    width: '50%',
    height: 2,
    backgroundColor: '#626262',
  },

})