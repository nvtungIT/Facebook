import { Link } from '@react-navigation/native'
import ScreenNames from 'general/constants/ScreenNames'
import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

export default function Block( { navigation }) {

  return (
    <View style={styles.wrapper}>
      <Text style={styles.textLabel}>Người bị chặn</Text>
      <Text style={styles.textNote}>Một khi bạn đã chặn ai đó, họ sẽ không xem được nội dung bạn tự đăng trên dòng thời 
        gian mình, gắn thẻ bạn, mời bạn tham gia sự kiện hoặc nhóm, bắt đầu cuộc trò chuyện với bạn 
        hay thêm bạn làm bạn bè. Điều này không bao gồm các ứng dụng, trò chơi hay nhóm mà cả bạn và người
        này đều tham gia.
      </Text>
      <Link to={{screen: ScreenNames.addBlock}}>
        <View style={styles.linkAddBlock}>
          <Icon
          name='plus-square'
          style={styles.iconPlus}
          />
          <Text style={styles.textAddBlock}>THÊM VÀO DANH SÁCH CHẶN</Text>
        </View>
      </Link>
      

    </View>
  )
}
