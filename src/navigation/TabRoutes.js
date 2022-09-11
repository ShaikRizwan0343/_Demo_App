import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ImagePath from '../helpers/ImagePath';
import {CurrentLocation, GetData, Home, SaveData, Selfie} from '../screens';
import {moderateScale, moderateScaleVertical} from '../theme/StyleConstants';
import {route} from '../utils/constants/routeNames';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  const theme = useTheme();
  const styles = useStyle(theme);
  return (
    <Tab.Navigator
      initialRouteName={route.Home}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: theme.colors.header,
          borderRadius: moderateScale(50),
          bottom: moderateScaleVertical(20),
          marginHorizontal: moderateScale(16),
          elevation: 5,
          height: moderateScaleVertical(85),
        },
      }}>
      <Tab.Screen
        name={route.Home}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  backgroundColor: focused
                    ? theme.colors.tabFocused
                    : 'transparent',
                  ...styles.imageWrapper,
                }}>
                <Image
                  style={[
                    styles.icon,
                    {
                      tintColor: focused ? 'red' : 'gray',
                    },
                  ]}
                  resizeMode={'contain'}
                  source={ImagePath.ic_home}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={route.CurrentLocation}
        component={CurrentLocation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  backgroundColor: focused
                    ? theme.colors.tabFocused
                    : 'transparent',
                  ...styles.imageWrapper,
                }}>
                <Image
                  style={[
                    styles.icon,
                    {
                      tintColor: focused ? 'red' : 'gray',
                    },
                  ]}
                  resizeMode={'contain'}
                  source={ImagePath.ic_location}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name={route.Selfie}
        component={Selfie}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  backgroundColor: focused
                    ? theme.colors.tabFocused
                    : 'transparent',
                  ...styles.imageWrapper,
                }}>
                <Image
                  style={[
                    styles.icon,
                    {
                      tintColor: focused ? 'red' : 'gray',
                    },
                  ]}
                  resizeMode={'contain'}
                  source={ImagePath.ic_camera}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={route.SaveData}
        component={SaveData}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  backgroundColor: focused
                    ? theme.colors.tabFocused
                    : 'transparent',
                  ...styles.imageWrapper,
                }}>
                <Image
                  style={[
                    styles.icon,
                    {
                      tintColor: focused ? 'red' : 'gray',
                    },
                  ]}
                  resizeMode={'contain'}
                  source={ImagePath.ic_read}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={route.GetData}
        component={GetData}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  backgroundColor: focused
                    ? theme.colors.tabFocused
                    : 'transparent',
                  ...styles.imageWrapper,
                }}>
                <Image
                  style={[
                    styles.icon,
                    {
                      tintColor: focused ? 'red' : 'gray',
                    },
                  ]}
                  resizeMode={'contain'}
                  source={ImagePath.ic_api}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
const useStyle = theme =>
  StyleSheet.create({
    icon: {
      height: moderateScaleVertical(24),
      width: moderateScale(24),
    },
    imageWrapper: {
      paddingHorizontal: moderateScale(15),
      paddingVertical: moderateScaleVertical(15),
      borderRadius: moderateScale(30),
    },
  });
