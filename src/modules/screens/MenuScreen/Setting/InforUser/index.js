import { Link } from '@react-navigation/native'
import ScreenNames from 'general/constants/ScreenNames'
import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

export default function InforUser() {

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Thông tin cá nhân và tài khoản</Text>
      <Link to={{screen: ScreenNames.nameSetting}}>
        <View style={styles.itemGroup}>
          <View>
            <Text style={styles.labelName}>Tên</Text>
            <Text style={styles.name}>Nguyễn Văn Biển</Text>
          </View>
          <Icon 
          name='angle-right'
          style={styles.icon}
          />
        </View>
      </Link>
    </View>
  )
}
