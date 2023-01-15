import { useState } from "react";
import { Image, StyleSheet, TouchableHighlight, TouchableOpacity, View, Text, Modal, Pressable, Alert, Button } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ScreenNames from "general/constants/ScreenNames";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
 

export default function NotificationItem(props) {
  const { itemData } = props;
  const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(false);

  //   notification_type: 1: thich, 2: binh luan, 3: sinh nhat, 4: bai viet moi/anh moi, 5: video, 6: ketban
  return (
    <>
      <TouchableOpacity style={[styles.container, itemData?.read ? styles.readBackground : '']}
        onPress={() => {
          navigation.navigate(ScreenNames.homeScreen)
          console.log("Navigate to...")
        }}
        activeOpacity={0.5}
        onLongPress={() => {
          setModalVisible(true)
        }}
      >
        <View
          style={styles.headerLeftImageWrap}
        >
          <View style={styles.imageView}>
            <Image
              style={styles.headerLeftImage}
              source = {{uri: itemData?.avatar}}
            />
            
            {
              itemData?.notification_type == 1 ? (
                <View
                  style={[styles.imageIconWrap, styles.bgUser]}
                >
                  <AntDesign
                    name='like1'
                    color={'#fff'}
                    style={styles.imageIcon}
                  />
                </View>
              ) : itemData?.notification_type == 2 ? (
                <View
                  style={[styles.imageIconWrap, styles.bgComment]}
                >
                  <FontAwesome
                    name='comment'
                    color={'#fff'}
                    style={styles.imageIcon}
                    />
                </View>
              ) : itemData?.notification_type == 3 ? (
                <View
                  style={[styles.imageIconWrap, styles.bgBirthday]}
                >
                  <FontAwesome
                    name='birthday-cake'
                    color={'#fff'}
                    style={styles.imageIcon}
                  />
                </View>
              ) : itemData?.notification_type == 4 ? (
                <View
                  style={[styles.imageIconWrap, styles.bgUser]}
                >
                  <FontAwesome
                    name='vcard'
                    color={'#fff'}
                    style={styles.imageIcon}
                  />
                </View>
              ): itemData?.notification_type == 5 ? (
                <View
                  style={[styles.imageIconWrap, styles.bgUser]}
                >
                  <FontAwesome
                    name='vcard'
                    color={'#fff'}
                    style={styles.imageIcon}
                  />
                </View>   
              ) : (
                <View
                  style={[styles.imageIconWrap, styles.bgUser]}
                >
                  <FontAwesome
                    name='user'
                    color={'#fff'}
                    style={styles.imageIcon}
                  />
                </View>             
              )
            }
              
            
            
          </View>
          
        </View>
        <View style={styles.notificationWrap}>
          <View style={styles.notificationMessageWrap}>
            <Text style={styles.text}>{ itemData?.title }</Text>
          </View>
          <View style={styles.timeWrap}>  
            <Text style={styles.time}>{ itemData?.created }</Text>
          </View>
        </View>
        <View
          style={styles.optionWrap}
        >
          <TouchableHighlight
            onPress={() => {
              // setIsShowExtendedList(!isShowExtendedList)
              // console.log("Show bottom sheet")
              setModalVisible(true)
            }}
            underlayColor='#abb1b8'
            style={styles.optionIconWrap}
          >
            <Icon
              size={15}
              color='black'
              name="dots-three-horizontal"
              style={styles.icon}
            />
            
          </TouchableHighlight>
        </View>
      </TouchableOpacity>
  
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={ () => {
          setModalVisible(!modalVisible);
        }}>
        
        <View style={styles.modalWrap}>
          <Pressable
            style={styles.modalHeader}
            onPress={() => setModalVisible(!modalVisible)}
          />
          <View
            style={styles.modalBody}
          >
            <View
              style={styles.modalBodyHead}
            />
            <View
              style={styles.notificationImageWrap}
            >
              <Image
                style={styles.notificationImage}
                source={{uri: itemData.avatar}}
              />
            </View>
            <Text style={styles.modalText}>{itemData?.title}</Text>
            <TouchableHighlight
              underlayColor={'#dfdfdf'}
              onPress={() => {
                // Remove notification
                console.log(`Remove notification with id=${itemData.notification_id}`)
                //Off modal
                setModalVisible(!modalVisible)
              }}
            >
              <View
                style={styles.removeNotifiWrap}
              >
                <View
                  style={styles.removeIconWrap}
                >
                  <FontAwesome
                    name="window-close"
                    color={'#000'}
                    style={styles.removeIcon}
                  />
                </View>
                <Text style={styles.removeNotifiText}>Gỡ thông báo này</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    with: '100%',
    height: '100%',
    paddingBottom: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    color: 'black',
    // backgroundColor: 'gray',
    height: 110,
    
  },
  readBackground: {
    backgroundColor: '#e0eeff'
  },
  headerLeftImageWrap: {
    flex: 2.5,
    borderRadius: 4,
    alignItems: 'center',
    paddingTop: 10,

  },
  notificationWrap: {
    flex: 8,
    paddingVertical: 10,
  },
  optionWrap: {
    flex: 1.2,
    // backgroundColor: 'blue',
  },
  imageView: {
    width: 65,
    height: 65,
    // backgroundColor: 'blue',
    position: 'relative'
  },
  notificationMessageWrap: {
    width: "100%",
    height: "80%",
    // backgroundColor: 'white',
    overflow: 'hidden'
  },
  imageIconWrap: {
    position: 'absolute',
    width: 30,
    height: 30,
    bottom: 0,
    right: 0,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageIcon: {
    fontSize: 17
  },
  headerLeftImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50
  },
  text: {
    color: 'black'
  },
  timeWrap: {
    // backgroundColor: 'green',
    position: 'absolute',
    width: "100%",
    bottom: 0
  },
  optionIconWrap: {
    width: "100%",
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  time: {
    color: '#919599',
    fontSize: 12
  },
  icon: {
    // width: 20,
    // height: 20,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 50
  },

  //Modal styles
  modalWrap: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0 ,0 , 0, 0.3)',
    // opacity: 0.35

  },
  modalHeader: {
    height: '63%',
  },
  modalBody: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    // paddingHorizontal: 15
  },
  modalBodyHead: {
    height: 4,
    borderRadius: 30,
    backgroundColor: '#ccc',
    marginHorizontal: 178,
    marginVertical: 10
  },
  modalView: {
    height: '100%'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    paddingHorizontal: 10,
    color: '#666',
    fontSize: 14
  },
  notificationImageWrap: {
    alignItems: 'center'
  },
  notificationImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  removeIconWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#e6e7eb',
    borderRadius: 50,
  },
  removeIcon: {
    fontSize: 19
  },
  removeNotifiWrap: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center'
  },
  removeNotifiText: {
    color: 'black',
    fontSize: 17,
    fontWeight: '600',
    paddingLeft: 10
  },

  //bg
  bgComment: {
    backgroundColor: '#0cbb57'
  },
  bgUser: {
    backgroundColor: '#0e76e8'
  },
  bgBirthday: {
    backgroundColor: '#e80ea1'
  },
  //Footer Toast
  footerToastWrap: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  whiteText: {
    color: '#fff'
  },
  undoRemoveBtnWrap: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 3
  },
  undoRemoveBtnColor: {
    color: 'rgba(6, 159, 148, 0.9)'
  }
})