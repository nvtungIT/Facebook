const { default: ReactNativeModal } = require('react-native-modal')
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './style'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
export default function MoreAllFriendModal(props) {
  const { isVisible, onModalHidden, avt, name } = props
  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackdropPress={() => {
        if (onModalHidden) {
          onModalHidden()
        }
      }}
      coverScreen={true}
      hasBackdrop={true}
      onSwipeComplete={() => {
        onModalHidden()
      }}
      swipeDirection="down"
      style={{ margin: 0 }}
    >
      <View style={styles.modal_container}>
        <TouchableOpacity style={styles.info_container}>
          <Image style={styles.avt} source={avt} />
          <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <View style={styles.icon_container}>
            <AntDesign
              style={[styles.icon, { marginLeft: 16 }]}
              name="message1"
            />
          </View>
          <Text style={styles.text}>Nhắn tin cho {name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <View style={styles.icon_container}>
            <Feather name="user-minus" style={styles.icon} />
          </View>
          <Text style={styles.text}>Chặn trang cá nhân của {name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <View style={styles.icon_container}>
            <Feather name="user-x" style={styles.icon} />
          </View>
          <Text style={styles.text}>Huỷ kết bạn với {name}</Text>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  )
}
