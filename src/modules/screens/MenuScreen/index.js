import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import DropDownPicker from 'react-native-dropdown-picker'
import ScreenNames from 'general/constants/ScreenNames'

export default function MenuScreen({ navigation: { navigate } }) {
  const [openHelp, setOpenHelp] = useState(false)
  const [openSetting, setOpenSetting] = useState(false)

  const handleLogOut = () => {
    navigate(ScreenNames.signUpScreen)
  }
  return (
    <View style={styles.wrapper}>
      <View style={styles.navbar}>
        <View style={styles.headerNav}>
          <Text style={styles.labelNav}>Menu</Text>
          <Icon name="search" style={styles.iconSearch} />
        </View>
        <View style={styles.user}>
          <Text style={styles.userName}>User</Text>
        </View>
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
