import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'
import ScreenNames from 'general/constants/ScreenNames'

export default function Security({ navigation: { navigate } }) {
  return (
    <View style={styles.wrapper}>
      <Text style = {styles.label}>Mật khẩu và bảo mật</Text>
      <View style = {styles.item}>
        <Text style = {styles.labelItem}>Đăng nhập</Text>
        <TouchableOpacity style = {styles.linkItem} onPress = {() => navigate(ScreenNames.changePassword)}>
          <Ionicons
          name='key-outline'
          style={styles.iconKey}
          />
          <View style={styles.itemText}>
            <Text style={styles.textLabel}>Đổi mật khẩu</Text>
            <Text style={styles.textNote}>Bạn nên sử dụng mật khẩu mạnh mà mình chưa sử dụng ở đâu khác</Text>
          </View>
          <Icon 
          name='angle-right'
          style={styles.iconNext}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
