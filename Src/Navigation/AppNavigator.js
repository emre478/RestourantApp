import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../Screens/SearchScreen';
import ResultShowScreen from '../Screens/ResultShowScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{title: 'Restoranlar'}}
        />
        <Stack.Screen
          name="ResultShow"
          component={ResultShowScreen}
          options={{title: 'Restaurant Bilgileri'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
