import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeScreen from "../screens/HomeScreen";

import FriendScreen from "../screens/FriendScreen";

import ProfileScreen from "../screens/ProfileScreen";

import ScreenNames from "../../general/constants/ScreenNames";

const Tab = createMaterialTopTabNavigator()

export default MainTabNavigator =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name={ScreenNames.homeScreen} component={HomeScreen}/>
            <Tab.Screen name={ScreenNames.friendScreen} component={FriendScreen}/>
            <Tab.Screen name={ScreenNames.profileScreen} component={ProfileScreen}/>
        </Tab.Navigator>
    )

}