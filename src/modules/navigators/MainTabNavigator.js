import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeScreen from '../screens/HomeScreen';

import FriendScreen from '../screens/FriendScreen';

import MenuScreen from '../screens/MenuScreen';

import ScreenNames from '../../general/constants/ScreenNames';

import NotificationScreen from '../screens/NotificationScreen';

import VideoScreen from '../screens/VideoScreen';

import Icon from 'react-native-vector-icons/Ionicons';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
const Tab = createMaterialTopTabNavigator();

export default MainTabNavigator => {
  return (
    <SafeAreaProvider>
      <AppHeader />
      <Tab.Navigator>
        <Tab.Screen
          options={{
            title: ({color, focused}) => (
              <Icon
                size={25}
                name={focused ? 'home' : 'home-outline'}
                color={focused ? '#1778F2' : '#272727'}
              />
            ),
          }}
          name={ScreenNames.homeScreen}
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            title: ({color, focused}) => (
              <Icon
                style={{transform: [{rotateY: '180deg'}]}}
                size={25}
                name={focused ? 'people' : 'people-outline'}
                color={focused ? '#1778F2' : '#272727'}
              />
            ),
          }}
          name={ScreenNames.friendScreen}
          component={FriendScreen}
        />
        <Tab.Screen
          options={{
            title: ({color, focused}) => (
              <Icon
                size={25}
                name={focused ? 'tv' : 'tv-outline'}
                color={focused ? '#1778F2' : '#272727'}
              />
            ),
          }}
          name={ScreenNames.videoScreen}
          component={VideoScreen}
        />
        <Tab.Screen
          options={{
            title: ({color, focused}) => (
              <Icon
                size={25}
                name={focused ? 'notifications' : 'notifications-outline'}
                color={focused ? '#1778F2' : '#272727'}
              />
            ),
          }}
          name={ScreenNames.notificationScreen}
          component={NotificationScreen}
        />
        <Tab.Screen
          options={{
            title: ({color, focused}) => (
              <Icon
                size={25}
                name={focused ? 'menu' : 'menu-outline'}
                color={focused ? '#1778F2' : '#272727'}
              />
            ),
          }}
          name={ScreenNames.menuScreen}
          component={MenuScreen}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};
