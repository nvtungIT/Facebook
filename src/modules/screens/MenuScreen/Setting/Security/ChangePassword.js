import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import styles from './styles'

import { getPreference, removePreference } from 'libs/storage/PreferenceStorage'
import { PreferenceKeys, serverDomain } from 'general/constants/Global'

function ChangePassword({ navigation }) {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()

  const handleUpdate = async () => {
    try {
      const userId = await getPreference('UserId')
      const token = await getPreference('UserToken')

      const api =
        serverDomain + `auth/change_password?token=${encodeURIComponent(token)}`

      const response = await fetch(api, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: currentPassword,
          new_password: newPassword,
          userId: userId,
        }),
      })
      const json = await response.json()
      if (json.code == 1004) {
        setError('currentPassword', {
          type: 'custom',
          message: 'Mật khẩu không đúng',
        })
      } else {
        // navigation.goBack()
        handleLogOut()
      }
      return json.movies
    } catch (error) {
      console.error(error)
    }
  }

  const handleLogOut = async () => {
    try {
      const api = serverDomain + '/auth/logout/'
      const token = await getPreference('UserToken')

      const response = await fetch(api, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: {
          token: token,
        },
      })
      removePreference(PreferenceKeys.UserToken)
      // console.log("removeToken: ", getPreference(PreferenceKeys.UserToken))
    } catch (error) {
      alert(error)
    }
    navigation.navigate(ScreenNames.loginScreen)
  }

  return (
    <View style={styles.wrapperChangePass}>
      <View style={styles.inputItem}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.formInput}
              placeholder="Mật khẩu hiện tại"
              placeholderTextColor="#8a8b8d"
              onBlur={onBlur}
              onChangeText={(currentPassword) => {
                onChange(currentPassword)
                setCurrentPassword(currentPassword)
              }}
              value={value}
            />
          )}
          name="currentPassword"
        />
      </View>
      {errors.currentPassword && (
        <Text style={styles.errorMessage}>
          {errors.currentPassword.message
            ? errors.currentPassword.message
            : 'Vui lòng nhập mật khẩu hiện tại của bạn.'}
        </Text>
      )}
      <View style={styles.inputItem}>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 6,
            pattern: /[a-z]*[0-9]*[^a-zA-Z0-9]/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.formInput}
              placeholder="Mật khẩu mới"
              placeholderTextColor="#8a8b8d"
              onBlur={onBlur}
              onChangeText={(newPassword) => {
                onChange(newPassword)
                setNewPassword(newPassword)
              }}
              value={value}
            />
          )}
          name="newPassword"
        />
      </View>
      {errors.newPassword && (
        <Text style={styles.errorMessage}>
          Vui lòng nhập mật khẩu mới của bạn.
        </Text>
      )}
      <View style={styles.inputItem}>
        <Controller
          control={control}
          rules={{
            required: true,
            validate: (value) => value == newPassword,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.formInput}
              placeholder="Nhập lại mật khẩu mới"
              placeholderTextColor="#8a8b8d"
              onBlur={onBlur}
              onChangeText={(repeatPassword) => {
                onChange(repeatPassword)
                setRepeatPassword(repeatPassword)
              }}
              value={value}
            />
          )}
          name="repeatPassword"
        />
      </View>
      {errors.repeatPassword && (
        <Text style={styles.errorMessage}>
          Bạn phải nhập một mật khẩu hai lần để xác nhận.
        </Text>
      )}
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.buttonUpdate}
          onPress={handleSubmit(handleUpdate)}
        >
          <Text style={styles.textButtonUpdate}>Cập nhật mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCancel}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.textButtonCancel}>Hủy</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChangePassword
