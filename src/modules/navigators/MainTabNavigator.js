import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeScreen from '../screens/HomeScreen';

import FriendScreen from '../screens/FriendScreen';

import MenuScreen from '../screens/MenuScreen';

import ScreenNames from '../../general/constants/ScreenNames';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export default MainTabNavigator => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: ({color, focused}) => (
            <Icon
              size={25}
              name={focused ? 'home' : 'home-outline'}
              color={focused ? '#1877f2' : '#272727'}
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
              size={25}
              name={focused ? 'people' : 'people-outline'}
              color={focused ? '#1877f2' : '#272727'}
            />
          ),
        }} name={ScreenNames.friendScreen} component={FriendScreen} />
      <Tab.Screen 
      
      options={{
        title: ({color, focused}) => (
          <Icon
            size={25}
            name={focused ? 'menu' : 'menu-outline'}
            color={focused ? '#1877f2' : '#272727'}
          />
        ),
      }} 
         name={ScreenNames.menuScreen} component={MenuScreen} />
    </Tab.Navigator>
  );
};
