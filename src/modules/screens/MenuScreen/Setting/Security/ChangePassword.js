import React from 'react'
import { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import styles from './styles'

export default function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();

    const {control, handleSubmit, formState: {errors} } = useForm()
    
    const handleUpdate = (data) => {
        console.log(data);
    }

  return (
    <View style={styles.wrapper}>
        <View style={styles.form}>
            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                    placeholder='Mật khẩu hiện tại'
                    placeholderTextColor={'#888'}
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    />
                )}
                name="currentPassword"
            />
            {errors.currentPassword && 
            <Text style={styles.errorMessage}>Vui lòng nhập mật khẩu hiện tại của bạn</Text>}
            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                    placeholder='Mật khẩu mới'
                    placeholderTextColor={'#888'}
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    />
                )}
                name="newPassword"
            />
            {errors.newPassword && 
            <Text style={styles.errorMessage}>Vui lòng nhập mật khẩu mới của bạn</Text>}
            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                    placeholder='Nhập lại mật khẩu mới'
                    placeholderTextColor={'#888'}
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    />
                )}
                name="repeatPassword"
            />
            {errors.repeatPassword && 
            <Text style={styles.errorMessage}>Bạn phải nhập một mật khẩu hai lần để xác nhận</Text>}

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
  )
}
