import React from 'react'
import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles'
import { useEffect } from 'react';

export default function AddBlock({navigation}) {
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    
  }, [searchValue])
  return (
    <View style={styles.wrapperAddBlock}>
      <View style={styles.header}>
        <Icon 
        name= 'arrow-left'
        style={styles.iconBack}
        onPress = {() => navigation.goBack()}
        />

        <View style={styles.search}>
          <TextInput
          autoFocus={true}
          placeholder='Nhập tên hoặc email'
          placeholderTextColor={'#888'}
          style={styles.inputSearch}
          onChangeText = {setSearchValue}
          value={searchValue} 
          />
          <MaterialIcons
          
          name='clear'
          style={searchValue ? styles.iconClear : {display: 'none'}}
          onPress={() => setSearchValue('')}
          />
        </View>
        
      </View>
    </View>
  )
}
