import React, {Component, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import FriendSearch from './FriendSearch';

export default function FriendScreen(props) {
  console.log('FriendScreen is rendering !!!!');

  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <FriendSearch />
        <Text style={{fontSize: 20, color: 'black'}}>FriendScreen</Text>
      </SafeAreaView>
    </View>
  );
}
