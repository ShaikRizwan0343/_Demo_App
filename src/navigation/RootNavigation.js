import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import CustomDarkTheme from '../theme/Dark';
import Shared from '../theme/Shared';
import {useSelector} from 'react-redux';
import {Colors} from '../theme/Colors';
import {route} from '../utils/constants/routeNames';
import TabRoutes from './TabRoutes';
import {UserDetails} from '../screens';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();

  let customTheme = Shared;

  const toggleTheme = useSelector(state => state.ThemeReducer.isDarkMode);

  const theme = toggleTheme ? CustomDarkTheme : customTheme;
  const statusBar = toggleTheme ? 'light-content' : 'dark-content';
  const statusBarColor = toggleTheme ? Colors.BLACK : Colors.WHITE;

  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle={statusBar} backgroundColor={statusBarColor} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={route.TabRoutes}>
        <Stack.Screen name={route.TabRoutes} component={TabRoutes} />
        <Stack.Screen name={route.UserDetails} component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
