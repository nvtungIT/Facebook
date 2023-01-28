import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { localIPAddress, PreferenceKeys } from 'general/constants/Global'
import styles from './styles'

export default function AddBlock( { navigation }) {
    const [searchValue, setSearchValue] = useState('');
    const [resultSearch, setResultSearch] = useState([]);

    useEffect(() => {
      async function fetchData() {
      try {
          const response = await fetch(
              localIPAddress +
              `search/search_user`,
              {
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                searchValue: searchValue
              }),
              },
          )

          const data = await response.json()
          console.log(data);
          if (data) {
              setResultSearch(data.data);
          }
          } catch (error) {
          console.log(error)
          }
      }
      fetchData();
  }, [searchValue])

    const SearchItem = (user) => (
      <TouchableOpacity style={styles.itemResultSearch}>
        <Text style={styles.nameItem}>{user.name}</Text>
        <Text style={styles.textBlock}>CHẶN</Text>
      </TouchableOpacity>
    )
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
      { resultSearch && resultSearch.map((user, index) => (
        
        // <View>
        //   <Text style={styles.textNoteResult}>Danh sách bên dưới hiển thị kết quả cho những người có trang
        //    cá nhân bao gồm các từ tương tự "{searchValue}". Những người này có thể không phải bạn bè hoặc 
        //    người theo dõi bạn.
        //   </Text>
          <SearchItem user={user.data} key={index} />
        // </View>
      ))}
    </View>
  )
}
