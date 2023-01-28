import { Link } from '@react-navigation/native'
import ScreenNames from 'general/constants/ScreenNames'
import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { getPreference, setPreference } from 'libs/storage/PreferenceStorage'
import styles from './styles'
import { useEffect } from 'react'
import { useState } from 'react'

export default function InforUser() {
  const [userName, setUserName] = useState('')
  useEffect(() => {
    async function fetchData() {
      const userName = await getPreference('UserName');
      setUserName(userName)
    }
    fetchData();
  }, [])

  return (
    <View style={styles.wrapper}>
      <Link to={{screen: ScreenNames.nameSetting}}>
        <View style={styles.itemGroup}>
          <View>
            <Text style={styles.labelName}>Tên</Text>
            <Text style={styles.name}>{userName}</Text>
          </View>
          <Icon 
          name='angle-right'
          style={styles.icon}
          />
        </View>
      </Link>
    </View>
  )
}
