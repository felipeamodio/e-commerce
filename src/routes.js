import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Principal from './screens/Principal';
import Login from './screens/Login';
import Settings from './screens/Settings';

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Tab.Screen name="Principal" component={Principal} options={{ headerShown: false }}/>
        <Tab.Screen name="Configurações" component={Settings} options={{ headerTitleAlign: 'center' }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}