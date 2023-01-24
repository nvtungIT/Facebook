import ScreenNames from 'general/constants/ScreenNames'
import React from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './styles'

export default function Block({navigation}) {

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Người bị chặn</Text>
      <Text style={styles.note}>Khi bạn chặn ai đó, họ sẽ không xem được nội dung bạn đăng trên dòng 
      thời gian của mình, gắn thẻ bạn, mời bạn tham gia sự kiện hoặc nhóm, bắt đầu cuộc trò chuyện
      với bạn hay thêm bạn làm bạn bè. Điều này không bao gồm các ứng dụng, trò chơi hay nhóm mà cả
      bạn và người này đều tham gia.</Text>

      <TouchableNativeFeedback onPress={() => navigation.navigate(ScreenNames.addBlock)}>
        <View style={styles.addBlock}>
          <AntDesign 
          name='plussquare'
          style={styles.icon}
          />
          <Text style={styles.textAddBlock}>THÊM VÀO DANH SÁCH CHẶN</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}
