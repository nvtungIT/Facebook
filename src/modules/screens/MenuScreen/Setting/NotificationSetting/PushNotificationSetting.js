import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Switch, Text, TouchableHighlight, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
// import styles from "../styles";

export default function PushNotificationSetting() {
  const [isMutePushNotify, setIsMutePushNotify] = useState(true);
  const [isVibrate, setIsVibrate] = useState(false);
  const [phoneLED, setPhoneLED] = useState(true);
  const [sound, setSound] = useState(true);
  const toggleSwitch = (functionName) => {
    functionName ?
      functionName(previousState => !previousState)
      : console("Error function name")
  }
  
  
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.rowElementWrap}>
        <View style={styles.iconWrap}>
          <MaterialCommunityIcons
            name='bell-off'
            style={styles.icon}  
          />
        </View>
        <TouchableHighlight
          onPress={() => {
            toggleSwitch(setIsMutePushNotify)
          }}
          style={{ flex: 8 }}
          underlayColor='#e6e7eb'
        >
          <View style={styles.rowElement}>
            <View style={styles.elementText}>
              <Text style={styles.elementTitleText}>Tắt thông báo đẩy</Text>
              <Text style={styles.elementSubtext}>Tắt</Text>
            </View>
            <View>
              <Switch
                trackColor={{ false: '#bdbebf', true: '#aacbff' }}
                thumbColor={isMutePushNotify ? '#1d6ff0' : '#fff'}
                onValueChange={() => toggleSwitch(setIsMutePushNotify)}
                value={isMutePushNotify}
                style={styles.switchElement}
              />
            </View>
          </View>
        </TouchableHighlight>
        
      </View>
      <View style={styles.rowElementWrap}>
        <View style={styles.iconWrap}>
          <MaterialCommunityIcons
            name='vibrate'
            style={styles.icon}  
          />
        </View>
        <TouchableHighlight
          onPress={() => {
            toggleSwitch(setIsVibrate)
          }}
          style={{ flex: 8 }}
          underlayColor='#e6e7eb'
        >
          <View style={styles.rowElement}>
            <View style={styles.elementText}>
              <Text style={styles.elementTitleText}>Rung</Text>
              <Text style={styles.elementSubtext}>Rung khi có thông báo đến</Text>
            </View>
            <View>
              <Switch
                trackColor={{ false: '#bdbebf', true: '#aacbff' }}
                thumbColor={isVibrate ? '#1d6ff0' : '#fff'}
                onValueChange={() => {
                  toggleSwitch(setIsVibrate)
                }}
                value={isVibrate}
                style={styles.switchElement}
              />
            </View>
          </View>
        </TouchableHighlight>  
      </View>
      <View style={styles.rowElementWrap}>
        <View style={styles.iconWrap}>
          <MaterialCommunityIcons
            name='lightning-bolt'
            style={styles.icon}  
          />
        </View>
        <TouchableHighlight
          onPress={() => {
            toggleSwitch(setPhoneLED)
          }}
          style={{ flex: 8 }}
          underlayColor='#e6e7eb'
        >
          <View style={styles.rowElement}>
            <View style={styles.elementText}>
              <Text style={styles.elementTitleText}>Đèn LED điện thoại</Text>
              <Text style={styles.elementSubtext}>Nhấp nháy đèn LED khi có thông báo đến</Text>
            </View>
            <View>
              <Switch
                trackColor={{ false: '#bdbebf', true: '#aacbff' }}
                thumbColor={phoneLED ? '#1d6ff0' : '#fff'}
                onValueChange={() => {
                  toggleSwitch(setPhoneLED)
                }}
                value={phoneLED}
                style={styles.switchElement}
              />
            </View>
          </View>
        </TouchableHighlight>  
      </View>
      <View style={styles.rowElementWrap}>
        <View style={styles.iconWrap}>
          <MaterialCommunityIcons
            name='volume-high'
            style={styles.icon}  
          />
        </View>
        <TouchableHighlight
          onPress={() => {
            toggleSwitch(setSound)
          }}
          style={{ flex: 8 }}
          underlayColor='#e6e7eb'
        >
          <View style={styles.rowElement}>
            <View style={styles.elementText}>
              <Text style={styles.elementTitleText}>Âm thanh</Text>
              <Text style={styles.elementSubtext}>Phát âm thanh khi có thông báo đến</Text>
            </View>
            <View>
              <Switch
                trackColor={{ false: '#bdbebf', true: '#aacbff' }}
                thumbColor={sound ? '#1d6ff0' : '#fff'}
                onValueChange={() => {
                  toggleSwitch(setSound)
                }}
                value={sound}
                style={styles.switchElement}
              />
            </View>
          </View>
        </TouchableHighlight>  
      </View>
      <Text style={styles.separate}></Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  rowElementWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 20,
    paddingLeft: 15,
  },
  elementText: {
    flex: 1,
  },
  elementTitleText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600'
  },
  elementSubtext: {
    fontSize: 13,
    color: '#666'
  },
  switchElement: {
    transform: [{ scaleX: 1.05 }, { scaleY: 1 }],
    width: 60
  },
  iconWrap: {
    paddingVertical: 10,
    paddingLeft: 20,
    alignContent: 'center'
    // backgroundColor: 'green'
  },
  icon: {
    fontSize: 24,
    color: 'black'
  },
  separate: {
    height: 1.25,
    backgroundColor: '#DDDDDD',
    marginVertical: 4
  },
})