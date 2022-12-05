import React, { Component, useEffect, useState } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import FriendSearch from './FriendSearch'
import FriendRequestList from './FriendRequestList'
export default function FriendScreen({ navigation }) {
  console.log('FriendScreen is rendering !!!!')

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <ScrollView>
          <FriendSearch navigation={navigation} />
          <FriendRequestList />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
