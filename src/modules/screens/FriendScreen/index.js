import React, { Component, useEffect, useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import FriendSearch from './FriendSearch'
import FriendRequestList from './FriendRequestList'
export default function FriendScreen({ navigation }) {
  console.log('FriendScreen is rendering !!!!')

  return (
    <SafeAreaView>
      <ScrollView>
        <FriendSearch navigation={navigation} />
        <FriendRequestList />
      </ScrollView>
    </SafeAreaView>
  )
}
