import React, { Component, useEffect, useState } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native'

export default function VideoScreen(props) {
  console.log('VideoScreen is rendering !!!!')

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <Text style={{ fontSize: 20, color: 'black' }}>VideoScreen</Text>
      </SafeAreaView>
    </View>
  )
}
