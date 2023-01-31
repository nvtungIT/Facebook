import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import MoreAllFriendModal from 'modules/views/MoreAllFriendModal'
import { useState } from 'react'
import ScreenNames from 'general/constants/ScreenNames'
export default function FriendItem(props) {
  const user_id = props.user_id
  const [moreAllFriendModalVisible, setMoreAllFriendModalVisible] = useState(
    false,
  )

  return (
    <TouchableOpacity style={styles.container} onPress={() => {
        props.navigation.navigate(ScreenNames.friendProfileView, {user_id:user_id})
      }}>
      <MoreAllFriendModal
        isVisible={moreAllFriendModalVisible}
        onModalHidden={() => {
          setMoreAllFriendModalVisible(false)
        }}
        {...props}
      ></MoreAllFriendModal>
      <View style={styles.left_part}>
        <Image
          style={[styles.avt, { marginLeft: 20 }]}
          source={{ uri: props.avt }}
        />
      </View>
      <View style={styles.right_part}>
        <View style={styles.name_container}>
          <View style={{}}>
            <Text style={styles.name}>{props.name}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setMoreAllFriendModalVisible(true)
            }}
            style={{ marginRight: 20 }}
          >
            <Icon size={20} color="#63666A" name="dots-three-horizontal" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  left_part: {
    width: '25%',
    height: 100,
    // borderWidth: 1,
    justifyContent: 'center',
  },
  avt: {
    height: 70,
    width: 70,
    borderRadius: 70,
  },
  right_part: {
    height: 100,
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    // borderWidth: 1,
  },
  name: {
    fontFamily: 'FACEBOLF',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  name_container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
})
