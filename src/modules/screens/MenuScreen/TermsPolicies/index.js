import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Octicons from 'react-native-vector-icons/Octicons'
import styles from './styles'

export default function TermsPolocies() {

  return (
    <View>
      <View style={styles.item}>
        <Icon
        name='book'
        style={styles.icon}
        />
        <View style={styles.textIcon}>
          <Text style={styles.labelItem}>Điều khoản dịch vụ</Text>
          <Text style={styles.noteItem}>Điều khoản bạn đồng ý khi sử dụng Facebook.</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Icon
        name='key'
        style={styles.icon}
        />
        <View style={styles.textIcon}>
          <Text style={styles.labelItem}>Chính sách quyền riêng tư</Text>
          <Text style={styles.noteItem}>Thông tin chúng tôi nhận và cách sử dụng.</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Octicons
        name='stop'
        style={styles.icon}
        />
        <View style={styles.textIcon}>
          <Text style={styles.labelItem}>Tiêu chuẩn cộng đồng</Text>
          <Text style={styles.noteItem}>Điều không được phép và cách báo cáo hành vi lăng mạ/lạm dụng/ngược đãi.</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Icon
        name='ellipsis-h'
        style={styles.icon}
        />
        <View style={styles.textIcon}>
          <Text style={styles.labelItem}>Tài nguyên khác</Text>
        </View>
      </View>
    </View>
  )
}
