import React, { Component, useEffect, useState } from 'react'
import styles from "./styles";
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon as Icon2 } from 'react-native-vector-icons/FontAwesome5';

export default function VideoScreen(props) {

  return (
    <View style={styles.wrapper}>
      <View style={styles.navbarWatch}>
        <View style={styles.labelNav}>
          <Text style={styles.labelWatch}>Watch</Text>
          <View>
            <Icon 
            name='search'
            style={styles.iconSearch}
            />
          </View>
        </View>
        <View style={styles.watchTag}>
          <View style={styles.listTag}>
            <Icon
            name='video'
            style={styles.iconTag}
            />
            <Text style={styles.labelTag}>Trực tiếp</Text>
          </View>
          <View style={styles.listTag}>
            <Icon 
            name='cutlery'
            style={styles.iconTag}
            />
            <Text style={styles.labelTag}>Ẩm thực</Text>           
          </View>
          <View style={styles.listTag}>
            <Icon 
            name='gamepad'
            style={styles.iconTag}
            />
            <Text style={styles.labelTag}>Chơi game</Text>            
          </View>
        </View>
      </View>
    </View>
  )
}
