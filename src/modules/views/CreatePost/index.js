import React, { useState } from 'react';
import {
  Modal,
  Text,
  Pressable,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from 'modules/views/CreatePost/styles';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';
import ImageBox from 'modules/views/CreatePost/image-box';
import Popup from 'modules/views/CreatePost/exit-popup';
import Feeling from 'modules/views/CreatePost//feeling-selection';
import icons from 'general/constants/icon';
import domain from 'general/constants/domain';
import { useEffect } from 'react';

const AddPost = (params) => {
  console.log('CreatePost render');
  const {
    postData,
    modalVisible,
    setModalVisible,
    token,
    avatar,
    userName,
    userId,
  } = params;
  const [popupVisible, setPopupVisible] = useState(false);
  const [user, setUser] = useState({
    name: userName,
    avatar: avatar,
  });
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [feelingModal, setFeelingModal] = useState(false);
  const [status, setStatus] = useState(null);
  const [willBeDeletedImages, setWillBeDeletedImages] = useState([]);
  const isUploadingImages =
    images.length > 0 && images[0]?.mimetype.includes('image');

  useEffect(() => {
    const fetchData = () => {
      const options = {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token,
          id: postData?.id,
        }),
      };
      fetch(domain + '/it4788/post/get_post', options)
        .then((res) => res.json())
        .then((data) => {
          const info = data.data;
          setImages(() => {
            if (!info?.image && !info?.video) return [];
            const fetchedImages = info?.image || [info?.video];
            const mimetype = info?.image ? 'image' : 'video';
            return fetchedImages.map((image) => {
              return {
                ...image,
                path: image?.url,
                mimetype,
              };
            });
          });
          setDescription(info?.described);
          setUser({
            name: info?.author?.name,
            avatar: info?.author?.avatar,
          });
          setStatus(info?.state);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  const addIconsToDescription = (value) => {
    let haveIconDescription = value;
    icons.forEach((item) => {
      haveIconDescription = haveIconDescription
        .split(item.text)
        .join(item.icon);
    });
    setDescription(haveIconDescription);
  };
  const modifyMetadata = async (data) => {
    let newImages;
    const numberOfNewImages = data.length;
    if (data[0]?.mime.includes('video')) {
      const buffer = await RNFS.readFile(data[0]?.path, 'base64');
      const video = data[numberOfNewImages - 1];
      newImages = [
        {
          fieldname: 'video',
          originalname: video.path.split('/').slice(-1)[0],
          encoding: 'base64',
          mimetype: video.mime,
          size: video.size,
          buffer,
          path: video.path,
        },
      ];
    } else
      newImages = data.map((image) => {
        return {
          fieldname: 'image',
          originalname: image.path.split('/').slice(-1)[0],
          encoding: 'base64',
          mimetype: image.mime,
          size: image.size,
          buffer: image.data,
          path: image.path,
        };
      });
    return newImages;
  };
  const getExactlyNumberOfImagesAsRequire = (currentImages, newImages) => {
    const numberOfCurrentImages = currentImages.length;
    const numberOfNewImages = newImages.length;
    if (newImages[0]?.mimetype.includes('video')) {
      return [newImages[numberOfNewImages - 1]];
    }
    if (numberOfNewImages >= 4) return newImages.slice(numberOfNewImages - 4);
    if (numberOfCurrentImages + numberOfNewImages > 4) {
      return [
        ...currentImages.slice(numberOfCurrentImages + numberOfNewImages - 4),
        ...newImages,
      ];
    }
    return [...currentImages, ...newImages];
  };
  const chooseFiles = async () => {
    ImagePicker.openPicker({
      multiple: true,
      includeBase64: true,
      mediaType: isUploadingImages ? 'photo' : 'any',
    })
      .then(async (data) => {
        const newImages = await modifyMetadata(data);
        setImages((currentImages) =>
          getExactlyNumberOfImagesAsRequire(currentImages, newImages)
        );
      })
      .catch((err) => console.log(err));
  };
  const closeModal = () => {
    setPopupVisible(true);
  };
  const chooseFeeling = () => {
    setFeelingModal(true);
  };
  const addPost = () => {
    const data = new FormData();
    data.append('described', description);
    data.append('status', status);
    if (isUploadingImages)
      data.append('image', JSON.stringify(images.filter((item) => !item?._id)));
    else
      data.append('video', JSON.stringify(images.filter((item) => !item?._id)));
    data.append('userId', userId);
    data.append('token', token);
    const options = {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    fetch(domain + '/it4788/post/add_post', options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  const editPost = () => {
    const data = new FormData();
    data.append('described', description);
    data.append('status', status);
    data.append('image_del', JSON.stringify(willBeDeletedImages));
    if (isUploadingImages)
      data.append('image', JSON.stringify(images.filter((item) => !item?._id)));
    else
      data.append('video', JSON.stringify(images.filter((item) => !item?._id)));
    data.append('userId', userId);
    data.append('id', postData?.id);
    data.append('token', token);
    const options = {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    fetch(domain + '/it4788/post/edit_post', options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  const post = () => {
    if (images.length === 0) return;
    if (!postData?.isEditing) addPost();
    else editPost();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.postCreater}>
        <ScrollView style={styles.scrollView}>
          <View style={[styles.wrapper, styles.header]}>
            <Pressable onPress={closeModal}>
              <FeatherIcon name="x" size={30} color="black" />
            </Pressable>
            <Text style={styles.boldText}>
              {postData?.isEditing ? 'Chỉnh sửa bài viết' : 'Tạo bài viết'}
            </Text>
            <Pressable onPress={post}>
              <Text
                style={
                  images.length === 0 && !description
                    ? [styles.boldText, styles.postBtn]
                    : [styles.boldText, styles.activeBtn]
                }
              >
                {postData?.isEditing ? 'Lưu' : 'Đăng'}
              </Text>
            </Pressable>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.userMenu}>
              <Image
                style={styles.avatar}
                source={
                  avatar
                    ? { uri: avatar }
                    : require('assets/images/male-avatar.jpg')
                }
              />
              <Text style={[styles.boldText, styles.userName]}>
                {userName ? userName : 'Facebook User'}
              </Text>
              <Text style={[styles.userName]}>
                {status && `đang cảm thấy ${status}`}
              </Text>
            </View>
            <TextInput
              style={styles.textInput}
              multiline
              value={description}
              onChangeText={addIconsToDescription}
              placeholder={`Bạn đang nghĩ gì?`}
            />
            {images.length > 0 && (
              <View style={styles.imageWrapper}>
                {[0, 1, 2, 3]
                  .filter((id) => isUploadingImages || !id)
                  .map((index) => {
                    return (
                      <ImageBox
                        key={index}
                        image={images[index]}
                        setImages={setImages}
                        setWillBeDeletedImages={setWillBeDeletedImages}
                        chooseFiles={chooseFiles}
                      />
                    );
                  })}
              </View>
            )}
          </View>
        </ScrollView>
        <View style={styles.fileInput}>
          <Pressable onPress={chooseFiles} style={{ flexDirection: 'row' }}>
            <EntypoIcon name="images" size={30} color="green" />
            <Text style={styles.fileTitle}>Ảnh/video</Text>
          </Pressable>
          <Pressable
            onPress={chooseFeeling}
            style={{ flexDirection: 'row', marginTop: 10 }}
          >
            <MaterialIcon name="emoji-emotions" size={30} color="#f7b928" />
            <Text style={styles.fileTitle}>Cảm xúc</Text>
          </Pressable>
        </View>
        {popupVisible && (
          <Popup
            setPopupVisible={setPopupVisible}
            setModalVisible={setModalVisible}
            isEditing={true}
          />
        )}
        {feelingModal && (
          <Feeling setModalVisible={setFeelingModal} setStatus={setStatus} />
        )}
      </View>
    </Modal>
  );
};

export default AddPost;
