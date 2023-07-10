import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import DeviceInfo from './screens/DeviceInfo';
import BatteryInfo from './screens/BatteryInfo';
import ScreenOrientations from './screens/ScreenOrientation';
import Notify from './screens/Notify';
import ContactsInfo from './screens/ContactsInfo';
import agendarnotificacao from './screens/agendarnotificacao';

const Stack = createStackNavigator();

export default function RootNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{headerShown: true}} />
                <Stack.Screen name='BatteryInfo' component={BatteryInfo} options={{headerShown: true}} />
                <Stack.Screen name='DeviceInfo' component={DeviceInfo} options={{headerShown: true}} />
                <Stack.Screen name='ScreenOrientation' component={ScreenOrientations} options={{headerShown: true}} />
                <Stack.Screen name='Notify' component={Notify} options={{headerShown: true}} />
                <Stack.Screen name='agendarnotificacao' component={agendarnotificacao} options={{headerShown: true}} />
            </Stack.Navigator>
        </NavigationContainer>    
    )
}