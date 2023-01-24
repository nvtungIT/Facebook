import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { Link } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

import ScreenNames from 'general/constants/ScreenNames';
import styles from './styles'

export default function Security({navigation}) {

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Mật khẩu và bảo mật </Text>
      <View style={styles.group}> 
        <Text style={styles.labelGroup}>Đăng nhập</Text>
        <TouchableOpacity onPress={() => navigation.navigate(ScreenNames.changePassword)}>
          <View style={styles.item}>
            <Ionicons
            name='key-outline'
            style={styles.iconKey}
            />
            <View style={styles.textGroup}>
              <Text style={styles.labelItem}>Đổi mật khẩu</Text>
              <Text style={styles.noteItem}>Bạn nên sử dụng mật khẩu mạnh mà mình
              chưa sử dụng ở đâu khác</Text>
            </View>
            <Icon 
            name='angle-right'
            style={styles.iconRight}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
