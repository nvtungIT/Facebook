import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
// import styles from "../styles";

export default function BirthdaysNotification() {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = (callbackName) => callbackName(previousState => !previousState);
  const [onPushNotification, setOnPushNotification] = useState(true);
  const [onNextBirthday, setOnNextBirthday] = useState(true);
  const [onLateBirthday, setOnLateBirthday] = useState(true);

  const toggleSwitchOnPush = () => {
    if (onPushNotification) {
      console.log('Set off push notification with updates from birthdays of friends')
    } else {
      console.log('Set on push notification with updates from birthdays of friends')
    }
    setOnPushNotification(previousState => !previousState);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.normalText}>Đây là các thông báo về sinh nhật của bạn bè bạn.
        Sau đây là ví dụ.</Text>
      <View style={[styles.rowElement, styles.status]}>
        <View style={styles.imageWrap}>
          <Image
            style={styles.imageElement}
            source={require('../../../../../assets/images/nvtung_image.png')}
          />
        </View>
        <Text
          style={[styles.normalText, styles.statusText]}
        >Hôm nay là sinh nhật của <Text style={{fontWeight: '700'}}>Josephine Williams</Text>. Hãy chúc cô ấy những điều tốt đẹp.</Text>
      </View>
      <Text style={styles.separate}></Text>
      <View style={styles.rowElement}>
        <Text style={styles.rowElementText}>Cho phép thông báo trên Facebook</Text>
        <View>
          <Switch
            trackColor={{ false: '#bdbebf', true: '#aacbff' }}
            thumbColor={isEnabled ? '#1d6ff0' : '#f4f3f4'}
            onValueChange={() => toggleSwitch(setIsEnabled)}
            value={isEnabled}
            style={styles.switchElement}
          />
        </View>
        
      </View>
      {isEnabled && (
        <View>
          <Text style={styles.separate}></Text>
          <Text style={styles.titleText}>Nơi bạn nhận các thông báo này</Text>
          <View style={[styles.rowElement, styles.iconWrap]}>
            <View>
              <Entypo
                name='notification'
                style={styles.iconElement}
              />
            </View>
            <Text style={styles.rowElementText}>Thông báo đẩy</Text>
            <View>
              <Switch
                trackColor={{ false: '#bdbebf', true: '#aacbff' }}
                thumbColor={onPushNotification ? '#1d6ff0' : '#f4f3f4'}
                onValueChange={toggleSwitchOnPush}
                value={onPushNotification}
                style={styles.switchElement}
              />
            </View>
            
          </View>
          <Text style={styles.separate}></Text>
          <Text style={styles.titleText}>Nhận thông báo về</Text>
          <View style={[styles.rowElement, styles.iconWrap]}>
            <Text style={styles.rowElementText}>Sinh nhật sắp tới</Text>
            <View>
              <Switch
                trackColor={{ false: '#bdbebf', true: '#aacbff' }}
                thumbColor={onNextBirthday ? '#1d6ff0' : '#f4f3f4'}
                onValueChange={() => toggleSwitch(setOnNextBirthday)}
                value={onNextBirthday}
                style={styles.switchElement}
              />
            </View>
            
          </View>
          <View style={[styles.rowElement, styles.iconWrap, styles.spaceOfRow]}>
            <Text style={styles.rowElementText}>Sinh nhật muộn</Text>
            <View>
              <Switch
                trackColor={{ false: '#bdbebf', true: '#aacbff' }}
                thumbColor={onLateBirthday ? '#1d6ff0' : '#f4f3f4'}
                onValueChange={() => toggleSwitch(setOnLateBirthday)}
                value={onLateBirthday}
                style={styles.switchElement}
              />
            </View>
            
          </View>
        </View>
      )}
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#fff',
    height: '100%',
  },
  imageWrap: {
    width: 32,
    height: 32,
  },
  imageElement: {
    width: '100%',
    height: '100%',
    borderRadius: 100
  },
  normalText: {
    fontSize: 13,
    color: '#666'
  },
  separate: {
    height: 1.25,
    backgroundColor: '#DDDDDD',
    marginVertical: 10
  },
  titleText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15
  },
  status: {
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 15
  },
  statusText: {
    flex: 8,
    paddingHorizontal: 10,
    paddingRight: 20
  },
  rowElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  rowElementText: {
    flex: 8,
    fontSize: 15.5,
    color: '#000',
    fontWeight: '500',
  },
  switchElement: {
    transform: [{ scaleX: 1.05 }, { scaleY: 1 }],
    width: 100
  },
  iconWrap: {
    alignItems: 'center'
  },
  iconElement: {
    fontSize: 29,
    fontWeight: 100,
    color: '#666666',
    paddingRight: 10
  },
  spaceOfRow: {
    marginTop: 20
  }
})