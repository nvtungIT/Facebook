const { default: ReactNativeModal } = require('react-native-modal')
import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro'
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
        <View style={styles.info_container}>
          <Image style={styles.avt} source={avt} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.tab}>
          <FontAwesome5Brands style={styles.icon} name="facebook-messenger" />
          <Text style={styles.text}>Nhắn tin cho {name}</Text>
        </View>
        <View style={styles.tab}></View>
        <View style={styles.tab}></View>
        <View style={styles.tab}></View>
      </View>
    </ReactNativeModal>
  )
}
