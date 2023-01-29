import React from 'react'
import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'

import { getPreference, setPreference, removePreference } from 'libs/storage/PreferenceStorage'
import { localIPAddress, PreferenceKeys } from 'general/constants/Global'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import styles from './styles'
import ScreenNames from 'general/constants/ScreenNames'

export default function NameSetting({navigation}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()


    useEffect(() => {
        async function fetchData() {
        
        const userToken = await getPreference('UserToken');
        try {
            const response = await fetch(
                localIPAddress +
                `user/get_user_info/?token=${encodeURIComponent(userToken)}`,
                {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                },
            )

            const data = await response.json()
            if (data) {
                setFirstName(data.data.firstName);
                setLastName(data.data.lastName);
                setMiddleName(data.data.middleName)
            }
            } catch (error) {
            console.log(error)
            }
        }
        fetchData();
    }, [])

    const handleUpdate = async (data) => {
        try {
            const userId = await getPreference('UserId');
            const token = await getPreference('UserToken');
            const api = localIPAddress + `user/update_name?token=${encodeURIComponent(token)}`
      
            const response = await fetch(api, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userId: userId,
                firstName: firstName,
                lastName: lastName,
                middleName: middleName ? middleName : "",
              }),
            })
            const json = await response.json()
            removePreference(PreferenceKeys.UserName)
            setPreference(PreferenceKeys.UserName, json.data.name)
            navigation.navigate(ScreenNames.inforUser)
            console.log(json);
            return json.movies
          } catch (error) {
            console.error(error)
          }
    }
  return (
    <View style={styles.wrapperNameSetting}>
        <View style={styles.formWrapper}>
            <Text style={styles.labelForm}>Tên</Text>
            {errors.firstName && !errors.lastName && (
              <Text style={styles.errorMessage}>
                Vui lòng nhập tên của bạn.
              </Text>
            )}
            {!errors.firstName && errors.lastName && (
              <Text style={styles.errorMessage}>Vui lòng nhập họ của bạn.</Text>
            )}
            {errors.firstName && errors.lastName && (
              <Text style={styles.errorMessage}>
                Vui lòng nhập họ và tên của bạn.
              </Text>
            )}
            <View style={styles.form}>
                <View style={styles.item}>
                    <Text style={styles.labelInput}>Họ</Text>   
                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={(lastName) => {
                            onChange(lastName)
                            setLastName(lastName)
                            }}
                            value={lastName}
                        />
                        )}
                        name="lastName"
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.labelInput}>Tên đệm</Text>
                    <Controller
                        control={control}
                        rules={{
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={(middleName) => {
                            onChange(middleName)
                            setMiddleName(middleName)
                            }}
                            value={middleName}
                        />
                        )}
                        name="middleName"
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.labelInput}>Tên</Text>
                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={(firstName) => {
                            onChange(firstName)
                            setFirstName(firstName)
                            }}
                            value={firstName}
                        />
                        )}
                        name="firstName"
                    />
                </View>

                <View style={styles.note}>
                    <Text style={styles.textNote}>
                        <Text style={styles.labelNote}>Vui lòng lưu ý: </Text>
                        Nếu đổi tên trên Facebook, bạn không thể đổi lại trong 60 ngày. Đừng viết hoa
                        khác thường, thêm bất kỳ dấu câu, ký tự hoặc từ ngẫu nhiên nào.
                    </Text>
                </View>

                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit(handleUpdate)}>
                        <Text style={styles.textButtonSave}>Lưu thay đổi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCancel} onPress={() => navigation.goBack()}>
                        <Text style={styles.textButtonCancel}>Hủy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}
