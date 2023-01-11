import React from 'react'
import { useState } from 'react'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import styles from './styles'

export default function NameSetting({navigation}) {
    const [firstName, setFirstName] = useState('Nv')
    const [lastName, setLastName] = useState('B')
    const [middleName, setMiddleName] = useState('')
    const [error, setError] = useState(false)

    const handleUpdate = () => {
        setError(true);
    }
  return (
    <View style={styles.wrapperNameSetting}>
        <View style={styles.formWrapper}>
            <Text style={styles.labelForm}>Tên</Text>
            {error && !firstName && lastName &&
                <Text style={styles.errorMessage}>Vui lòng nhập tên của bạn.</Text>                        
            }
            {error && firstName && !lastName &&
                <Text style={styles.errorMessage}>Vui lòng nhập họ của bạn.</Text>                        
            }
            {error && !firstName && !lastName &&
                <Text style={styles.errorMessage}>Vui lòng nhập họ và tên của bạn.</Text>                        
            }
            <View style={styles.form}>
                <View style={styles.item}>
                    <Text style={styles.labelInput}>Họ</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={
                            (lastName) => setLastName(lastName)
                        }
                        value={lastName}
                    />   
                </View>
                <View style={styles.item}>
                    <Text style={styles.labelInput}>Tên đệm</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={
                            (middleName) => setMiddleName(middleName)
                        }
                        value={middleName}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.labelInput}>Tên</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={
                            (firstName) => setFirstName(firstName)
                        }
                        value={firstName}
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
                    <TouchableOpacity style={styles.buttonSave} onPress={handleUpdate}>
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
