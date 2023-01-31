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
import { getPreference } from 'libs/storage/PreferenceStorage';
import FetchingPopup from './fetching-popup';

const AddPost = (params) => {
  console.log('CreatePost render');
  const { visible, setvisible, isEditPostMode, route, navigation } = params;
  const postEdit = route?.params.postEdit;
  const handleAfterEditPost = route?.params.handleAfterEditPost;
  const isEditing = isEditPostMode === false ? false : true;
  const [popupVisible, setPopupVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [feelingModal, setFeelingModal] = useState(false);
  const [status, setStatus] = useState('');
  const [willBeDeletedImages, setWillBeDeletedImages] = useState([]);
  const [isUploadingImages, setIsUploadingImages] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    //get token
    async function getToken() {
      let token = await getPreference('UserToken');
      setToken(token);
    }
    if (!token) getToken();

    //get userid
    async function getUserId() {
      let userId = await getPreference('UserId');
      setUserId(userId);
    }
    if (!userId) getUserId();

    //get username
    async function getUserName() {
      let userName = await getPreference('UserName');
      setUserName(userName);
    }
    if (!userName) getUserName();

    //get user avatar
    async function getAvatar() {
      let avatarUrl = await getPreference('UserAvatar');
      setAvatarUrl(avatarUrl);
    }
    if (!avatarUrl) getAvatar();
  }, []);

  const avatarSrc =
    avatarUrl != '' && avatarUrl != null
      ? { uri: avatarUrl }
      : require('assets/images/male-avatar.jpg');

  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  useEffect(() => {
    if (images.length == 0) setIsUploadingImages(false);
  }, [images.length]);

  const convertObject = (data) => {
    return {
      id: data.id,
      path: data.url,
    };
  };

  useEffect(() => {
    if (isEditing === true) {
      setDescription(postEdit.described);
      if (postEdit.state != undefined) setStatus(postEdit.state);
      if (postEdit.image) {
        console.log('post image: ', postEdit.image);
        setIsUploadingImages(true);
        let images = [];
        postEdit.image.forEach((img) => {
          images = [...images, convertObject(img)];
        });
        setImages(images);
      }
      if (postEdit.video) {
        let images = convertObject(postEdit.video[0]);
        setImages(images);
      }
    }
  }, [isEditing]);

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
        if (newImages[0].mimetype.includes('image')) setIsUploadingImages(true);
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
    if (images.length > 0) {
      if (isUploadingImages)
        data.append(
          'image',
          JSON.stringify(images.filter((item) => !item?.id))
        );
      else
        data.append(
          'video',
          JSON.stringify(images.filter((item) => !item?.id))
        );
    }
    data.append('userId', userId);
    data.append('token', token);
    const options = {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    console.log('add_post request send');
    setFetching(true);
    fetch(domain + '/it4788/post/add_post', options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.code == '1000') {
          setFetching(false);
          setvisible(false);
        }
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editPost = () => {
    const data = new FormData();
    data.append('described', description);
    postEdit.described = description;
    data.append('status', status);
    postEdit.state = status;
    data.append('image_del', JSON.stringify(willBeDeletedImages));
    let imagesUpload = images.filter((item) => !item?.id);
    if (imagesUpload.length > 0) {
      if (isUploadingImages) data.append('image', JSON.stringify(imagesUpload));
      else {
        data.append(
          'video',
          JSON.stringify(images.filter((item) => !item?.id))
        );
        console.log('video:', images);
      }
    }
    data.append('userId', userId);
    data.append('id', postEdit?.id);
    data.append('token', token);
    const options = {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    console.log('edit post request send');
    setFetching(true);
    fetch(domain + '/it4788/post/edit_post', options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.code == '1000') {
          setFetching(false);
          navigation.goBack();
          handleAfterEditPost(postEdit.id);
        }
        setFetching(false);
      })
      .catch((err) => console.log(err));
  };
  const post = () => {
    if (isEditing === false) addPost();
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
              {isEditing ? 'Chỉnh sửa bài viết' : 'Tạo bài viết'}
            </Text>
            <Pressable onPress={post}>
              <Text
                style={
                  images.length === 0 && !description
                    ? [styles.boldText, styles.postBtn]
                    : [styles.boldText, styles.activeBtn]
                }
              >
                {isEditing ? 'Lưu' : 'Đăng'}
              </Text>
            </Pressable>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.userMenu}>
              <Image style={styles.avatar} source={avatarSrc} />
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
                        videoUpload={!isUploadingImages}
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
            setvisible={setvisible}
            navigate={navigation}
            isEditing={isEditing}
          />
        )}
        {feelingModal && (
          <Feeling setModalVisible={setFeelingModal} setStatus={setStatus} />
        )}
      </View>
      {fetching && <FetchingPopup />}
    </Modal>
  );
};

export default AddPost;
