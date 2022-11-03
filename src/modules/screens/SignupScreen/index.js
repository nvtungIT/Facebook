import React, { Component, useEffect, useState, useRef } from "react";
import { View, Text, TextInput, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DatePicker from "react-native-date-picker";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-native-phone-number-input";
import styles from "./styles";

export default function SignupScreen(props){
	const [lastName, setLastName] = useState('');
	const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState(new Date());
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [checkPhone, setCheckPhone] = useState(false);
    const phoneInput = useRef(null);

    const [field, setField] = useState(0);

    const {control, handleSubmit, formState: {errors} } = useForm()
    const onSubmitName = (data) => {
        setField(field+1);
    };
    const onSubmitEmail = (data) => {
        setField(field+1);
    };

    const onSubmitPhone = () => {
        const checkValid = phoneInput.current?.isValidNumber(phone);
        checkValid && setField(field + 1);
        setCheckPhone(checkValid ? checkValid : false);
    };

    const onSubmitPassword = (data) => {
        setField(field+1);
       }
    return (
        <View style={styles.wrapper}>
            {field == 0 && 
            <View style={styles.formGroup}>
                <View style={styles.formNavigate}>
                    <Icon 
                    name="arrow-left" 
                    style={styles.icon}
                    />
                    <Text style={styles.formNavigateLabel}>Tạo tài khoản</Text>
                </View>
                <View>
                    <Image 
                    style={styles.imageSignUp}
                    source={{
                        uri: 'https://cdn.tgdd.vn/Files/2016/05/10/826826/qw_1280x720-800-resize.jpg',
                    }}/>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Tham gia Facebook</Text>
                    <Text style={styles.formNote}>Chúng tôi sẽ giúp bạn tạo tài khoản mới sau vài bước dễ dàng.</Text>
                        
                    <View style={styles.buttonView}>
                    <Button
                    onPress={() => setField(field+1)}
                    title="Tiếp"/>
                    </View>
                </View>
            </View>
            }
            {field == 1 && 
            <View style={styles.formGroup}>
                <View style={styles.formNavigate}>
                    <Icon 
                    name="arrow-left" 
                    style={styles.icon}
                    onPress={() => setField(field-1)}
                    />
                    <Text style={styles.formNavigateLabel}>Tên</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Tên của bạn là gì?</Text>
                    {errors.firstName && !errors.lastName &&
                        <Text style={styles.errorMessage}>Vui lòng nhập tên của bạn.</Text>                        
                    }
                    {!errors.firstName && errors.lastName &&
                        <Text style={styles.errorMessage}>Vui lòng nhập tên của bạn.</Text>                        
                    }
                    {errors.firstName && errors.lastName &&
                        <Text style={styles.errorMessage}>Vui lòng nhập họ và tên của bạn.</Text>                        
                    }
                    {!errors.firstName && !errors.lastName &&
                        <Text style={styles.formNote}>Nhập tên bạn sử dụng trong đời thực</Text>                       
                    }
                    
                    <View style={styles.inputGroup}>
                        <Controller
                            control={control}
                            rules={{
                            required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.formInput}
                                onBlur={onBlur}
                                placeholder="Họ"
                                onChangeText={
                                    (lastName) => {
                                        onChange(lastName);
                                        setLastName(lastName)
                                    }
                                }
                                value={value}
                            />
                            )}
                            name="lastName"
                        />
                        <Controller
                            control={control}
                            rules={{
                            required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.formInput}
                                placeholder="Tên"
                                onBlur={onBlur}
                                onChangeText={
                                    (firstName) => {
                                        onChange(firstName);
                                        setLastName(firstName)
                                    }
                                }
                                value={value}
                            />
                            )}
                            name="firstName"
                        />
                    </View>
                    <View style={styles.buttonView}>
                    <Button
                    onPress={handleSubmit(onSubmitName)}
                    title="Tiếp"
                    />
                    </View>
                </View>
            </View>
            }
            {field == 2 && 
            <View style={styles.formGroup}>
                <View style={styles.formNavigate}>
                    <Icon 
                    name="arrow-left" 
                    style={styles.icon}
                    onPress={() => setField(field-1)}
                    />
                    <Text style={styles.formNavigateLabel}>Ngày sinh</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Ngày sinh của bạn là khi nào?</Text>
                    <Text style={styles.formNote}>Chọn ngày sinh của bạn. Bạn luôn có thể đặt 
                    thông tin này ở chế độ riêng tư vào lúc khác.
                    </Text>
                    <View style={styles.inputGroup}>
                        <DatePicker 
                        date={date} 
                        onDateChange={setDate}
                        mode="date"
                        fadeToColor="none"
                        />
                    </View>
                    <View style={styles.buttonView}>
                    <Button
                    onPress={() => setField(field+1)}
                    title="Tiếp"/>
                    </View>
                </View>
            </View>
            }
            {field == 3 && 
            <View style={styles.formGroup}>
                <View style={styles.formNavigate}>
                    <Icon 
                    name="arrow-left" 
                    style={styles.icon}
                    onPress={() => setField(field-1)}
                    />
                    <Text style={styles.formNavigateLabel}>Số di động</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Nhập số di động của bạn</Text>
                    {!checkPhone &&
                    <Text style={styles.errorMessage}>
                        Vui lòng nhập 1 số điện thoại hợp lệ
                    </Text>
                    }

                    <View style={styles.inputGroup}>
                        <PhoneInput
                            ref={phoneInput}
                            style={styles.formInput}
                            defaultValue={phone}
                            defaultCode="VN"
                            onChangeText={setPhone}
                            withDarkTheme
                            containerStyle={styles.formInput}
                        />
                    </View>
                    <View style={styles.buttonView}>
                    <Button
                    onPress={onSubmitPhone}
                    title="Tiếp"/>
                    </View>
                </View>
            </View>
            }
            {field == 4 && 
            <View style={styles.formGroup}>
                <View style={styles.formNavigate}>
                    <Icon 
                    name="arrow-left" 
                    style={styles.icon}
                    onPress={() => setField(field-1)}
                    />  
                    <Text style={styles.formNavigateLabel}>Địa chỉ email</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Thêm email của bạn</Text>
                    {errors.email && 
                        <Text style={styles.errorMessage}>Vui lòng nhập email hợp lệ.</Text>                     
                    }
                    {!errors.email && 
                        <Text style={styles.formNote}>
                            Thêm email giúp bạn giữ tài khoản của mình an toàn, 
                            tìm kiếm bạn bè và hơn thế nữa
                        </Text>                     
                    }
                    
                    <View style={styles.inputGroup}>
                        <Controller
                            control={control}
                            rules={{
                            required: true,
                            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.formInput}
                                onBlur={onBlur}
                                placeholder="Email"
                                onChangeText={
                                    (email) => {
                                        onChange(email);
                                        setLastName(email)
                                    }
                                }
                                value={value}
                            />
                            )}
                            name="email"
                        />
                    </View>
                    <View style={styles.buttonView}>
                    <Button
                    onPress={handleSubmit(onSubmitEmail)}
                    title="Tiếp"/>
                    </View>
                </View>
            </View>
            }
            {field == 5 && 
            <View style={styles.formGroup}>
                <View style={styles.formNavigate}>
                    <Icon 
                    name="arrow-left" 
                    style={styles.icon}
                    onPress={() => setField(field-1)}
                    />
                    <Text style={styles.formNavigateLabel}>Mật khẩu</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Chọn mật khẩu</Text>
                    {errors.password && 
                        <Text style={styles.errorMessage}>
                            Mật khẩu của bạn phải có tối thiểu 6 chữ cái, số và biểu tượng (như ! và %%).
                        </Text>                     
                    }
                    <View style={styles.inputGroup}>
                        <Controller
                            control={control}
                            rules={{
                            required: true,
                            minLength: 6,
                            pattern: /[a-z]*[0-9]*[^a-zA-Z0-9]/
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.formInput}
                                onBlur={onBlur}
                                placeholder="Mật khẩu"
                                onChangeText={
                                    (password) => {
                                        onChange(password);
                                        setLastName(password)
                                    }
                                }
                                value={value}
                                
                            />
                            )}
                            name="password"
                        />
                    </View>
                    <View style={styles.buttonView}>
                    <Button
                    onPress={handleSubmit(onSubmitPassword)}
                    title="Tiếp"/>
                    </View>
                </View>
            </View>
            }
            {field == 6 && 
            <View style={styles.formGroup}>
                <View style={styles.formNavigate}>
                    <Icon 
                    name="arrow-left" 
                    style={styles.icon}
                    onPress={() => setField(field-1)}
                    />
                    <Text style={styles.formNavigateLabel}>Điều khoản & Quyền riêng tư</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Hoàn tất đăng ký</Text>
                    <Text style={styles.formNote}>Bằng cách nhấn vào Đăng ký, bạn đồng ý với ... </Text>
                    <View style={styles.buttonView}>
                    <Button
                    title="Đăng ký"/>
                    </View>
                </View>
            </View>
            }
            
            
        </View>
    );

    
}
