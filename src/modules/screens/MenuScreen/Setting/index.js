import ScreenNames from 'general/constants/ScreenNames'
import React from 'react'
import {
  View,
  Text,
  Touchable,
} from 'react-native'
import { Link } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

export default function Setting() {

  return (
    <View style={styles.wrapper}>
      {/* Tài khoản */}

      <View style={styles.group}> 
        <Text style={styles.labelGroup}>Tài khoản</Text>
        <Text style={styles.noteGroup}>Cập nhật thông tin để góp phần bảo vệ tài khoản.</Text>
        <Link to={{screen: ScreenNames.inforUser}}>
          <View style={styles.item}>
            <Icon
            name='user-circle'
            style={styles.iconUser}
            />
            <Text style={styles.labelItem}>Thông tin cá nhân và tài khoản</Text>
          </View>
        </Link>
        <Link to={{screen: ScreenNames.security}}>
          <View style={styles.item}>
            <MaterialCommunityIcons
            name='security'
            style={styles.icon}
            />
            <Text style={styles.labelItem}>Mật khẩu và bảo mật</Text>
          </View>
        </Link>
      </View>

      {/* Tùy chọn */}

      <View style={styles.group}> 
        <Text style={styles.labelGroup}>Tùy chọn</Text>
        <Text style={styles.noteGroup}>Tùy chỉnh trải nghiệm của bạn trên Facebook.</Text>
        <Link to={{screen: ScreenNames.notificationSetting}}>
          <View style={styles.item}>
            <Ionicons
            name='notifications'
            style={styles.icon}
            />
            <Text style={styles.labelItem}>Thông báo</Text>
          </View>
        </Link>
        
      </View>

      {/* Đối tượng và chế độ hiển thị */}

      <View style={styles.group}> 
        <Text style={styles.labelGroup}>Đối tượng và chế độ hiển thị</Text>
        <Text style={styles.noteGroup}>Kiểm soát ai có thể xem bài viết, tin và trang cá nhân của bạn.</Text>
        <Link to={{screen: ScreenNames.block}}>
          <View style={styles.item}>
            <Icon
            name='user-times'
            style={styles.icon}
            />
            <Text style={styles.labelItem}>Chặn</Text>
          </View>
        </Link>
        
      </View>
    </View>
  )
}
