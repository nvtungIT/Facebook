import { useState } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Image, 
    TextInput,
    TouchableOpacity,
    Keyboard,
    TouchableHighlight
    
} from 'react-native';

import styles from './styles';


export default LoginScreen = () => {
    const [underPhone, setUnderPhone] = useState(false) 
    const [underPassword, setUnderPassword] = useState(false)
    const [pressInPhone, setPressInPhone] = useState(false)
    const [pressInPassword, setPressInPassword] = useState(false)
    const [isKeyBoardShow, setIsKeyBoardShow] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [isLoginBtnPressed, setIsLoginBtnPressed] = useState(false)
    const [isCreateAccPressed, setIsCreateAccPressed] = useState(false)

    Keyboard.addListener('keyboardDidShow', () => {
        setIsKeyBoardShow(true)
    })

    Keyboard.addListener('keyboardDidHide', () => {
        setIsKeyBoardShow(false)
    })

    return (
    
        <SafeAreaView
            behavior={'padding'} 
            style={{
                flex: 1
            }}
        >
            <View>
                <View>
                    <Image
                        source={require('../../../assets/images/login.png')}
                        style={ styles.image }
                    />
                </View> 
                <Text style={ styles.languagues }>
                    English - Vietnamese
                </Text>
                <View
                    style={[
                        {
                            marginTop: isKeyBoardShow ? 10 : 47,
                        },
                        styles.inputTextWrap,
                        pressInPhone ? styles.grayBackground : ''
                    ]}
                >
                    <TextInput placeholder='Số điện thoại'
                        style={styles.inputText}

                        value={phoneNumber}
                        onChangeText={(newPhone) => {
                            setPhoneNumber(newPhone)
                        }}

                        keyboardType='phone-pad'
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
                            marginTop: 6,
                        },
                        styles.inputTextWrap,
                        pressInPassword ? styles.grayBackground : ''
                    ]}
                >
                    <TextInput
                        placeholder='Mật khẩu'
                        style={[
                            styles.inputText,
                        ]}
                        value={password}
                        onChangeText={(newPassword) => {
                            setPassword(newPassword)
                        }}

                        onFocus={() => {
                            setUnderPhone(false)
                            setUnderPassword(true)
                        }}
                        secureTextEntry={!showPassword}
                        onPressIn={() => {
                            setPressInPassword(true)
                        }}
                        onPressOut={() => {
                            setPressInPassword(false)
                        }}
                    />
                    <TouchableOpacity
                        style={styles.iconShowPasswordWrap}
                        onPress={() => { 
                            setShowPassword(!showPassword)
                        }}>
                        <Text style={styles.iconShowPassword}>
                            {showPassword ? 'Ẩn' : 'Hiện'}</Text>
                    </TouchableOpacity>
                    <View style={styles.under_border_small}></View>
                    <View style={[
                        styles.under_border,
                        underPassword ? '' : styles.hide
                    ]}>
                    </View>
                </View>
                <TouchableHighlight
                    style={ isLoginBtnPressed ? styles.titleTextLoginWrapUnderlay : styles.titleTextLoginWrap}
                    underlayColor='#999999'
                    activeOpacity={0.9}
                    onPress={() => {
                        // setIsLoginBtnPressed(true)
                    }}
                    onShowUnderlay={() => {
                        setIsLoginBtnPressed(true)
                    }}
                    onHideUnderlay={() => {
                        setIsLoginBtnPressed(false)
                    }}
                >
                    <Text
                        style={[
                            styles.titleText,
                            isLoginBtnPressed ? styles.titleTextLoginShowUnderlay : styles.titleTextLogin
                        ]}
                    >Đăng nhập</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={ styles.titleTextForgetPasswordWrap }
                    underlayColor='#e4e4e4'
                    onPress={() => {
                        
                    }}
                >
                    <Text
                        style={[
                            styles.titleText,
                            styles.titleTextForgetPassword
                        ]}
                    >Quên mật khẩu?</Text>
                </TouchableHighlight>

                <View
                    style={{
                        marginHorizontal: 40,
                        marginTop: isKeyBoardShow ? 10 : 44
                    }}
                >
                    <View></View>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 13,
                            borderRadius: 5,
                            paddingVertical: 5,
                        }}
                    >HOẶC</Text>
                    <View></View>
                </View>

                <TouchableHighlight
                    style={{
                        marginHorizontal: isCreateAccPressed ? 62 : 60,
                        marginTop: isKeyBoardShow ? 7 : 38
                    }}
                    underlayColor='#bdbdbd'
                    activeOpacity={0.9}
                    onPress={() => {
                        
                    }}
                    onShowUnderlay={() => {
                        setIsCreateAccPressed(true)
                    }}
                    onHideUnderlay={() => {
                        setIsCreateAccPressed(false)
                    }}
                >
                    <Text
                        style={[
                            styles.titleText,
                            isCreateAccPressed ? styles.titleCreateAccIsPressed : styles.titleCreateAcc
                        ]}
                    >Tạo tài khoản Facebook mới</Text>
                </TouchableHighlight>
                {/* <Text>phone: {phoneNumber}</Text>
                <Text>password: {password}</Text> */}
            </View> 
        </SafeAreaView>

    )
}