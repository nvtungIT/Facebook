import React from 'react'
import { useState } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './styles'

export default function AddBlock( { navigation }) {
    const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.wrapperAddBlock}>
      <View style={styles.header}>
        <Icon
        name='arrow-left'
        style={styles.iconBack}
        onPress = { () => navigation.goBack()}
        />
        <View style={styles.inputSearch}>
          <TextInput
          style={styles.input}
          placeholder = "Nhập tên hoặc email"
          onChange={setSearchValue}
          value={searchValue}
          />
          <Ionicons
          name='close'
          style={searchValue ? styles.iconClear : {display: 'none'}}
          onPress={() => setSearchValue('')}
          />
        </View>
      </View>
    </View>
  )
}
