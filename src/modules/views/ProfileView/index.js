import React, { Component, useEffect, useState } from 'react'
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Dimensions } from 'react-native'
import { getPreference } from 'libs/storage/PreferenceStorage'
import { AppColors } from 'general/constants/AppColor'
import Entypo from 'react-native-vector-icons/Entypo'
import { serverDomain } from 'general/constants/Global'
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
        serverDomain + `user/get_user_info/?token=${encodeURIComponent(token)}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          credentials: 'include',
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
    <View>
      <ScrollView>
        <View style={styles.cover_image_container}>
          <TouchableOpacity style={styles.camera_icon_container_cover}>
            <Icon name="camera" size={20} color={AppColors.black} />
          </TouchableOpacity>
          <Image
            style={styles.cover_image}
            source={{
              uri:
                'https://scontent.fhan15-2.fna.fbcdn.net/v/t1.6435-9/90253030_528227334546061_1570172745575038976_n.jpg?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=7N6Kbhz5LrMAX9dvwLA&_nc_ht=scontent.fhan15-2.fna&oh=00_AfC8Tx2Jr_jX5L4k4Bfokj4VcIGMlxyfwZFc9oLQspAj8Q&oe=63F1CBA6',
            }}
          ></Image>

          <View style={styles.avt_container}>
            <Image style={styles.avt} source={{ uri: userData.avatar }}></Image>
          </View>
          <TouchableOpacity style={styles.camera_icon_container}>
            <Icon name="camera" size={20} color={AppColors.black} />
          </TouchableOpacity>
        </View>

        <View></View>

        <Text style={styles.name}>{userData.username}</Text>
        <View style={styles.more_button_container}>
          <TouchableOpacity style={styles.edit_profile_button}>
            <Icon name="pencil" size={14} color={AppColors.black} />
            <Text style={styles.edit_button_text}>Chỉnh sửa trang cá nhân</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.more_button}>
            <Entypo
              name="dots-three-horizontal"
              size={14}
              color={AppColors.black}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.line}></View>
        <View style={styles.detail_view}>
          <Text style={styles.detail_text}>Chi tiết</Text>
          <View style={styles.detail_container}>
            <Icon name="home" size={25} />
            <Text style={{ fontSize: 18, marginLeft: 10 }}>
              Sống tại{' '}
              <Text style={{ color: 'black', fontWeight: 'bold' }}>
                {userData.city}
              </Text>
            </Text>
          </View>
        </View>

        <Text></Text>
        <Text></Text>
      </ScrollView>
    </View>
  )
}
