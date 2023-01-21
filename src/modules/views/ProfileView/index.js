import React, { Component, useEffect, useState } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Dimensions } from 'react-native'
import { getPreference } from 'libs/storage/PreferenceStorage'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function ProfileView() {
  useEffect(() => {
    getData()
  }, [])

  const [userData, setData] = useState({})

  const getUserInfo = async (token) => {
    try {
      const response = await fetch(
        `http://192.168.1.13:5000/it4788/user/get_user_info/?token=${encodeURIComponent(
          token,
        )}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          // body: JSON.stringify({
          //   token,
          //   user_id,
          // }),
        },
      )

      const dataReceived = await response.json()
      if (dataReceived) {
        console.log(dataReceived)
        setData(dataReceived.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getData = async () => {
    try {
      const token = await getPreference('UserToken')

      if (token !== null) {
        getUserInfo(token)
      } else console.log('Không có thông tin')
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <View style={{}}>
      {console.log(userData.link)}
      <ScrollView style={{}}>
        <View style={styles.cover_image_container}>
          <View>
            <Image
              style={styles.cover_image}
              source={{
                uri:
                  'https://scontent.fhan15-2.fna.fbcdn.net/v/t1.6435-9/90253030_528227334546061_1570172745575038976_n.jpg?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=7N6Kbhz5LrMAX9dvwLA&_nc_ht=scontent.fhan15-2.fna&oh=00_AfC8Tx2Jr_jX5L4k4Bfokj4VcIGMlxyfwZFc9oLQspAj8Q&oe=63F1CBA6',
              }}
            ></Image>
          </View>

          <View style={styles.avt_container}>
            <Image style={styles.avt} source={{ uri: userData.link }}></Image>
          </View>
        </View>
        <View>
          <Text>{userData.username}</Text>
        </View>
      </ScrollView>
    </View>
  )
}
