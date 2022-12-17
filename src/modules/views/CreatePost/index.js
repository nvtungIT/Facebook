import React, { useState } from 'react'
import { StyleSheet, Modal, Text, Pressable, View, Image, TextInput } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import ImagePicker from 'react-native-image-crop-picker'

const AddPost = () => {
  const [modalVisible, setModalVisible] = useState(true)
  const [popupVisible, setPopupVisible] = useState(false)
  const [description, setDescription] = useState('')
  const [imageSrc, setImageSrc] = useState([])

  console.log(imageSrc)
  const chooseFiles = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
    }).then(image => {
      console.log(image)
      setImageSrc(preState => {
        const srcs = preState.filter(item => item)
        return [...srcs, image.path]
      })
    })
  }
  const closeModal = () => {
    setPopupVisible(true)
  }

  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.postCreater}>
          <View style={[styles.wrapper, styles.header]}>
            <Pressable onPress={closeModal}>
              <FeatherIcon name='x' size={30} />
            </Pressable>
            <Text style={styles.boldText}>Create Post</Text>
            <Pressable disabled>
              <Text style={(imageSrc.length === 0 && !description) ? [styles.boldText, styles.postBtn] : [styles.boldText, styles.activeBtn]}>Post</Text>
            </Pressable>
          </View>

          <View style={styles.wrapper}>
            <View style={styles.userMenu}>
              <Image style={styles.avatar} source={require('assets/images/male-avatar.jpg')} />
              <Text style={[styles.boldText, styles.userName]}>Minh Nguyen</Text>
            </View>
            <TextInput
              style={styles.textInput}
              value={description}
              onChangeText={setDescription}
              placeholder={`What's on your mind?`}
            />
            {imageSrc.length > 0 && 
              <View style={styles.imageWrapper}>
                {[0, 1, 2, 3].map(image => {
                  return <ImageBox key={image} uri={imageSrc[image]} setImageSrc={setImageSrc} />
                })}
              </View>
            }
          </View>

          <View style={styles.fileInput}>
            <Pressable onPress={chooseFiles} style={{flexDirection: 'row'}}>
              <EntypoIcon name='images' size={30} color='green' />
              <Text style={styles.fileTitle}>Photo/video</Text>
            </Pressable>
          </View>
          {popupVisible && <Popup setPopupVisible={setPopupVisible} />}
        </View>
      </Modal>
  )
}

function ImageBox({uri, setImageSrc}) {
  const deleteImage = () => {
    setImageSrc(preState => preState.filter(item => item !== uri))
  }

  return (
    <View style={styles.imageBox}>
      {uri ?
        <View style={styles.imageContainer}>
          <Pressable style={styles.deleteBtn} onPress={deleteImage}>
            <FeatherIcon name='x' size={30} />
          </Pressable>
          <Image key={uri} source={{uri}} width={30} height={30} />
        </View>
      :
        <EntypoIcon name='plus' size={30} color='black' />
      }
    </View>
  )
}

function Popup({setPopupVisible}) {
  const continueWritingPost = () => {
    setPopupVisible(false)
  }

  return (
    <View style={styles.popupWrapper}>
      <View style={styles.popupContent}>
        <Text style={styles.popupTitle}>Save this post as a draft?</Text>
        <Text style={styles.popupPara}>If you discard now, you'll lose this post</Text>
        <Pressable style={[styles.popupBtn]}>
          <Text style={[styles.textPopup, {color: '#1677ff'}]}>Save Draft</Text>
        </Pressable>
        <Pressable style={[styles.popupBtn]}>
          <Text style={[styles.textPopup, {color: 'red'}]}>Discard Post</Text>
        </Pressable>
        <Pressable style={[styles.popupBtn]} onPress={continueWritingPost}>
          <Text style={[styles.textPopup, {color: '#006aff', fontWeight: '600'}]}>Keep Editing</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageWrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imageBox: {
    width: 160,
    height: 160,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative'
  },
  deleteBtn: {
    position: 'absolute',
    top: -60,
    right: -60
  },
  popupWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(1,1,1,0.25)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  popupContent: {
    width: 250,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center'
  },
  popupTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
    paddingHorizontal: 20
  },
  popupPara: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 20,
    textAlign: 'center',
    marginBottom: 12
  },
  popupBtn: {
    width: '100%',
    paddingVertical: 10,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  textPopup: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center'
  },
  postCreater: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff'
    // 1677ff
  },
  wrapper: {
    padding: 10,
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  boldText: {
    fontSize: 20,
    fontWeight: '700'
  },
  activeBtn: {
    padding: 8,
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#1677ff'
  },
  postBtn: {
    padding: 8,
    backgroundColor: '#ddd',
    borderRadius: 10
  },
  userMenu: {
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  userName: {
    marginLeft: 10
  },
  textInput: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '400',
  },
  fileInput: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    backgroundColor: '#f1f1f1'
  },
  fileTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '500'
  }
})

export default AddPost
