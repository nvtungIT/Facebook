import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'

import HomeScreen from 'modules/screens/HomeScreen'
import FriendScreen from 'modules/screens/FriendScreen'
import MenuScreen from 'modules/screens/MenuScreen'
import ScreenNames from 'general/constants/ScreenNames'
import NotificationScreen from 'modules/screens/NotificationScreen'
import VideoScreen from 'modules/screens/VideoScreen'
import AppHeader from 'modules/components/AppHeader'
import { AppColors } from 'general/constants/AppColor'
const Tab = createMaterialTopTabNavigator()

export default MainTabNavigator = () => {
  return (
    <SafeAreaProvider>
      <AppHeader />
      <Tab.Navigator initialRouteName={ScreenNames.homeScreen}>
        <Tab.Screen
          options={{
            title: ({ color, focused }) => (
              <Icon
                size={25}
                name={focused ? 'home' : 'home-outline'}
                color={focused ? AppColors.primaryColor : '#272727'}
              />
            ),
          }}
          name={ScreenNames.homeScreen}
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            title: ({ color, focused }) => (
              <Icon
                style={{ transform: [{ rotateY: '180deg' }] }}
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
            title: ({ color, focused }) => (
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
            title: ({ color, focused }) => (
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
            title: ({ color, focused }) => (
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
  )
}
