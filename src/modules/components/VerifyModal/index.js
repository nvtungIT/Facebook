const { default: ReactNativeModal } = require('react-native-modal')
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './style'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
export default function VerifyModal(props) {
  const {
    isVisible,
    isFirstButtonClicked,
    isSecondButtonClicked,
    onVerifyPressed,
    onCancelPressed,
    name,
    firstTaskName,
    secondTaskName,
    onModalHidden,
  } = props

  var taskName
  if (isFirstButtonClicked) {
    taskName = firstTaskName
  }
  if (isSecondButtonClicked) {
    taskName = secondTaskName
  }

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
        <View style={styles.text_container}>
          <Text style={styles.title}>Xác nhận {taskName}</Text>
          <Text style={[styles.title, { fontWeight: 'bold' }]}>{name}</Text>
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity
            style={styles.first_button}
            onPress={() => {
              onVerifyPressed()
            }}
          >
            <Text style={styles.button_text}>Xác nhận</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.second_button}
            onPress={() => {
              onCancelPressed()
            }}
          >
            <Text style={[styles.button_text, { color: 'black' }]}>Hủy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ReactNativeModal>
  )
}
