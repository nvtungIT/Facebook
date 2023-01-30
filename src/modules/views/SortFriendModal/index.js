const { default: ReactNativeModal } = require('react-native-modal')
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './style'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Feather from 'react-native-vector-icons/Feather'
export default function SortFriendModal(props) {
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
        <TouchableOpacity style={styles.tab}>
          <View style={styles.icon_container}>
            <MaterialCommunityIcons
              style={[styles.icon, { marginLeft: 16 }]}
              name="star-four-points-outline"
            />
          </View>
          <Text style={styles.text}>Sắp xếp mặc định </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <View style={styles.icon_container}>
            <Octicons name="sort-asc" style={styles.icon} />
          </View>
          <Text style={styles.text}>Bạn bè mới nhất trước tiên </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <View style={styles.icon_container}>
            <Octicons name="sort-desc" style={styles.icon} />
          </View>
          <Text style={styles.text}>Bạn bè lâu năm trước tiên </Text>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  )
}
