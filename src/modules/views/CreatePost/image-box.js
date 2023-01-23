import React from 'react'
import { Pressable, View, Image } from 'react-native'
import styles from 'modules/views/CreatePost/styles'
import FeatherIcon from 'react-native-vector-icons/Feather'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import Video from 'react-native-video'

function ImageBox({ image, setImages, setWillBeDeletedImages, chooseFiles }) {
  const isUploadingVideo = image?.mimetype.includes('video')
  const edgeSize = {
    width: isUploadingVideo ? 320 : 160,
    height: isUploadingVideo ? 320 : 160,
  }

  const deleteImage = () => {
    if (image?.id)
      setWillBeDeletedImages((preState) => [...preState, image?.id])
    setImages((preState) =>
      preState.filter((item) => item?.path !== image?.path),
    )
  }

  return (
    <View style={{ ...styles.imageBox, ...edgeSize }}>
      {image?.path ? (
        <View style={styles.imageContainer}>
          <Pressable style={styles.deleteBtn} onPress={deleteImage}>
            <FeatherIcon name="x" size={30} color="black" />
          </Pressable>
          {isUploadingVideo ? (
            <Video
              repeat
              posterResizeMode="cover"
              resizeMode="cover"
              source={{ uri: image?.path }}
              style={{ width: 260, height: 260 }}
            />
          ) : (
            <Image
              source={{ uri: image?.path }}
              objectFit="contain"
              style={edgeSize}
            />
          )}
        </View>
      ) : (
        <Pressable onPress={chooseFiles}>
          <EntypoIcon name="plus" size={30} />
        </Pressable>
      )}
    </View>
  )
}

export default ImageBox
