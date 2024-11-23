import BottomTabs from './BottomTabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const AppStack = () => {



    return (

        <Stack.Navigator>

            <Stack.Screen
                options={{ headerShown: false }}
                name="BottomTabs"
                component={BottomTabs} />





        </Stack.Navigator>


    )
}

export default AppStack