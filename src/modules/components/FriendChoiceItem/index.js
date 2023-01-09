import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useState, useEffect } from 'react'
import VerifyModal from '../../components/VerifyModal'
import styles from './style'
export default function FriendChoiceItem(props) {
  const [isFirstButtonClicked, setIsFirstButtonClicked] = useState(false)
  const [isSecondButtonClicked, setIsSecondButtonClicked] = useState(false)
  const [isVerifyModalVisible, setIsVerifyModalVisible] = useState(false)
  const [isVerifyButtonClicked, setIsVerifyButtonClicked] = useState(false)
  const [isCancelButtonClicked, setIsCancelButtonClicked] = useState(false)
  var respondeText

  let cancelButton = (
    <TouchableOpacity
      onPress={() => {
        setIsCancelButtonClicked(true)
      }}
      style={styles.cancel_button}
    >
      <Text style={[styles.button_text, { color: 'black' }]}>Hủy</Text>
    </TouchableOpacity>
  )

  let choiceButtons = (
    <View style={styles.button_container}>
      <TouchableOpacity
        onPress={() => {
          setIsFirstButtonClicked(true)
          setIsSecondButtonClicked(false)
          setIsVerifyModalVisible(true)
        }}
        style={styles.first_button}
      >
        <Text style={styles.button_text}>{props.first_button}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.second_button}
        onPress={() => {
          setIsFirstButtonClicked(false)
          setIsSecondButtonClicked(true)
          setIsVerifyModalVisible(true)
        }}
      >
        <Text style={[styles.button_text, { color: 'black' }]}>
          {props.second_button}
        </Text>
      </TouchableOpacity>
    </View>
  )
  let noButton = <View style={styles.button_container}></View>

  let respondeView = choiceButtons
  // chấp nhận lời mời kết bạn
  if (isFirstButtonClicked && isVerifyButtonClicked) {
    respondeText = props.firstTaskResponse
    respondeView = noButton
  }
  // gửi lời mời kết bạn
  if (
    isFirstButtonClicked &&
    isVerifyButtonClicked &&
    props.isSuggestedFriend
  ) {
    respondeText = props.firstTaskResponse
    respondeView = cancelButton
  }
  // xoá lời mời kết bạn / xoá gợi ý kết bạn
  if (isSecondButtonClicked && isVerifyButtonClicked) {
    respondeText = props.secondTaskResponse
    respondeView = noButton
  }

  // huỷ gửi yêu cầu kết bạn
  if (isCancelButtonClicked) {
    respondeText = 'Đã hủy yêu cầu'
    respondeView = noButton
  }

  return (
    <>
      <VerifyModal
        isVisible={isVerifyModalVisible}
        isFirstButtonClicked={isFirstButtonClicked}
        isSecondButtonClicked={isSecondButtonClicked}
        onCancelPressed={() => {
          setIsVerifyModalVisible(false)
        }}
        onVerifyPressed={() => {
          setIsVerifyButtonClicked(true)
          setIsVerifyModalVisible(false)
        }}
        onModalHidden={() => {
          setIsVerifyModalVisible(false)
        }}
        {...props}
      ></VerifyModal>
      <TouchableOpacity style={styles.container}>
        <View style={styles.left_part}>
          <Image style={[styles.avt, { marginLeft: 20 }]} source={props.avt} />
        </View>
        <View style={styles.right_part}>
          <View style={styles.name_container}>
            <Text style={styles.name}>{props.name}</Text>
          </View>
          <View>
            <Text>{respondeText}</Text>
            {respondeView}
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}
