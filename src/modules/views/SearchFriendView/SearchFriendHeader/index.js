import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  SafeAreaView,
} from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'
import styles from './style.js'
import SearchBar from 'react-native-dynamic-search-bar'

export default function SearchFriendHeader(props) {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.button}
        >
          <Icon style={styles.icon} size={25} name="arrow-left" />
        </TouchableOpacity>
        <View
          style={{
            height: 40,

            justifyContent: 'center',
          }}
        >
          <SearchBar
            style={styles.search_bar}
            searchIconComponent={<></>}
            textInputStyle={{ marginLeft: 0 }}
            placeholder="Tìm kiếm bạn bè"
            onClearPress={() => {
              Keyboard.dismiss()
            }}
            onChangeText={(text) => console.log(text)}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
