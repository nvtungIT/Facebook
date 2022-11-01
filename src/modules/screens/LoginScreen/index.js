import { useState } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Image, 
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';

import styles from './styles';


export default LoginScreen = () => {
    const [underPhone, setUnderPhone] = useState(false) 
    const [underPassword, setUnderPassword] = useState(false)
    const [pressInPhone, setPressInPhone] = useState(false)
    const [pressInPassword, setPressInPassword] = useState(false)
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>      
            <View >
                <Image
                    source={require('../../../assets/images/login.png')}
                    style={{ width: '100%', height: 195 }}
                />
            </View> 
            <Text style={{fontSize:14, color:'gray', textAlign: 'center', paddingTop: 5}}>
                English
            </Text>
            <View
                style={[
                    {
                        marginHorizontal: 40,
                        marginTop: 47,
                        paddingHorizontal: 1,
                        paddingVertical: 2,
                        // borderBottomColor: 'blue',
                        // borderBottomWidth: 1.7,
                        // backgroundColor: 'gray'
                    },
                    pressInPhone ? styles.grayBackground : ''
                ]}
            >
                <TextInput placeholder='Số điện thoại'
                    style={{
                        fontSize: 18,
                        marginLeft: 1
                    }}
                    onFocus={() => {
                        setUnderPhone(true)
                        setUnderPassword(false)
                    }}
                    onPressIn={() => {
                        setPressInPhone(true)
                    }}
                    onPressOut={() => {
                        setPressInPhone(false)
                    }}
                />
                <View style={styles.under_border_small}></View>
                <View
                    style={[
                        styles.under_border,
                        underPhone ? '' : styles.hide
                    ]}>        
                </View>
            </View>
            <View
                style={[
                    {
                        marginHorizontal: 40,
                        marginTop: 10,
                        paddingHorizontal: 1, 
                        paddingVertical: 2,
                    },
                    pressInPassword ? styles.grayBackground : ''
                ]}
            >
                <TextInput
                    placeholder='Mật khẩu'
                    style={[
                        styles.inputText,
                    ]}
                    onFocus={() => {
                        setUnderPhone(false)
                        setUnderPassword(true)
                    }}
                    secureTextEntry={true}
                    onPressIn={() => {
                        setPressInPassword(true)
                    }}
                    onPressOut={() => {
                        setPressInPassword(false)
                    }}
                />
                <TouchableOpacity
                    style={{
                        right: 5,
                        top: 12,
                        position: 'absolute',
                    }}
                    onPress={() => { }}>
                    <Text
                        style={{
                            color: '#AD40AF',
                            fontWeight: '700',
                        }}
                    >
                        Forgot</Text>
                </TouchableOpacity>
                <View style={styles.under_border_small}></View>
                <View style={[
                        styles.under_border,
                        underPassword ? '' : styles.hide
                ]}>
                </View>
            </View>
            <View
                style={{
                    marginHorizontal: 40,
                    marginTop: 15
                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        backgroundColor: 'blue',
                        fontSize: 17,
                        color: '#fff',
                        borderRadius: 5,
                        paddingVertical: 5,
                        fontWeight: '600'

                    }}
                >Dang nhap</Text>
            </View>

            <View
                style={{
                    marginHorizontal: 40,
                    marginTop: 10,
                    
                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 17,
                        color: 'blue',
                        borderRadius: 5,
                        paddingVertical: 4,
                        fontWeight: '700',
                        marginHorizontal: 72,

                        //PressIn
                        backgroundColor: 'gray',
                        
                    }}
                >Quen mat khau?</Text>
            </View>

            <View
                style={{
                    marginHorizontal: 40,
                    marginTop: 30
                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 17,
                        borderRadius: 5,
                        paddingVertical: 5,
                    }}
                >--------------HOAC------------</Text>
            </View>

            <View
                style={{
                    marginHorizontal: 60,
                    marginTop: 40
                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 16,
                        borderRadius: 5,
                        backgroundColor: 'green',
                        color: 'white',
                        fontWeight: '600',
                        paddingVertical: 5,
                    }}
                >Tao tai khoan Facebook moi</Text>
            </View>
            
               
            
            
        </SafeAreaView>
    )
}