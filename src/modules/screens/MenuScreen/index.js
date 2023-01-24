import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import DropDownPicker from 'react-native-dropdown-picker'
import ScreenNames from 'general/constants/ScreenNames'
import { getPreference, removePreference } from 'libs/storage/PreferenceStorage'
import { PreferenceKeys } from 'general/constants/Global'

export default function MenuScreen({ navigation: { navigate } }) {
  const [openHelp, setOpenHelp] = useState(false)
  const [openSetting, setOpenSetting] = useState(false)
  const token = getPreference(PreferenceKeys.UserToken)

  const handleLogOut = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.13:5000/it4788/auth/logout`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          params: {
            token: token,
          },
        },
      )
      removePreference(PreferenceKeys.UserToken)
      // console.log("removeToken: ", getPreference(PreferenceKeys.UserToken))
    } catch (error) {
      alert(error)
    }
    navigate(ScreenNames.loginScreen)
  }
  return (
    <View style={styles.wrapper}>
      <View style={styles.navbar}>
        <View style={styles.headerNav}>
          <Text style={styles.labelNav}>Menu</Text>
          <Icon name="search" style={styles.iconSearch} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigate(ScreenNames.profileView)
          }}
          style={styles.user}
        >
          <Text style={styles.userName}>User</Text>
        </TouchableOpacity>
      </View>
      {/* Trợ giúp & hỗ trợ */}
      <View style={openHelp && styles.dropdownHelpOpen}>
        <DropDownPicker
          placeholder="Trợ giúp & hỗ trợ"
          style={styles.dropdownStyle}
          textStyle={{
            fontSize: 20,
            fontWeight: '700',
          }}
          open={openHelp}
          setOpen={setOpenHelp}
          items={[
            {
              label: 'Điều khoản & chính sách',
              value: '1',
              icon: () => <Icon name="book" style={styles.icon} />,
              containerStyle: {
                height: 60,
                backgroundColor: '#fff',
                borderWidth: 0,
                borderColor: '#dfdfdf',
                borderRadius: 8,
                margin: 5,
                color: 'black',
                fontWeight: '600',
              },
            },
          ]}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          listItemLabelStyle={styles.listItemLabelStyle}
          onSelectItem={(item) => {
            navigate(ScreenNames.termsPolicies)
          }}
        />
      </View>
      {/* Cài đặt và quyền riêng tư */}
      <View style={openSetting && styles.dropdownSettingOpen}>
        <DropDownPicker
          placeholder="Cài đặt và quyền riêng tư"
          style={styles.dropdownStyle}
          textStyle={{
            fontSize: 20,
            fontWeight: '700',
          }}
          open={openSetting}
          setOpen={setOpenSetting}
          items={[
            {
              label: 'Cài đặt',
              value: '1',
              icon: () => <Icon name="user-circle" style={styles.icon} />,
              containerStyle: {
                height: 60,
                backgroundColor: '#fff',
                borderWidth: 0,
                borderColor: '#dfdfdf',
                borderRadius: 8,
                margin: 5,
                color: 'black',
                fontWeight: '600',
              },
            },
          ]}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          listItemLabelStyle={styles.listItemLabelStyle}
          onSelectItem={(item) => {
            navigate(ScreenNames.setting)
          }}
        />
      </View>
      {/* Đăng xuất */}
      <TouchableOpacity style={styles.logOut} onPress={handleLogOut}>
        <Text style={styles.labelLogOut}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  )
}
