import React from 'react';
import { Text, Pressable, View } from 'react-native';
import styles from 'modules/views/CreatePost/styles';

function Popup({
  setPopupVisible,
  setModalVisible,
  setvisible,
  navigate,
  isEditing,
}) {
  const discardChange = () => {
    setPopupVisible(false);
    setModalVisible(false);
    if (isEditing === false) setvisible(false);
    else navigate.goBack();
  };
  const continueWritingPost = () => {
    setPopupVisible(false);
  };

  return (
    <View style={styles.popupWrapper}>
      <View style={styles.popupContent}>
        <Text style={styles.popupTitle}>
          {isEditing
            ? 'Bỏ thay đổi?'
            : 'Bạn muốn hoàn thành bài viết của mình sau?'}
        </Text>
        <Text style={styles.popupPara}>
          {isEditing
            ? 'Nếu bỏ bây giờ thì bạn sẽ mất mọi thay đổi trên bài viết này'
            : 'Lưu làm bản nháp hoặc bạn có thể tiếp tục chỉnh sửa'}
        </Text>
        {!isEditing && (
          <Pressable style={[styles.popupBtn]} onPress={discardChange}>
            <Text style={[styles.textPopup, { color: '#1677ff' }]}>
              Lưu làm bản nháp
            </Text>
          </Pressable>
        )}
        <Pressable style={[styles.popupBtn]} onPress={discardChange}>
          <Text style={[styles.textPopup, { color: 'red' }]}>
            {isEditing ? 'Bỏ' : 'Bỏ bài viết'}
          </Text>
        </Pressable>
        <Pressable style={[styles.popupBtn]} onPress={continueWritingPost}>
          <Text
            style={[styles.textPopup, { color: '#006aff', fontWeight: '600' }]}
          >
            Tiếp tục chỉnh sửa
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Popup;
