import { useState } from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';

export default MoreOpt = ({ visible }) => {
  const [modalVisible, setModalVisible] = useState();
  setModalVisible(visible);
  return (
    <View style={styles.modalView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <Pressable onPress={() => setModalVisible(false)}>
          <Image
            source={{
              uri: 'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
            }}
            style={{ width: 50, height: 50 }}
          />
        </Pressable>
        <Text>More option view</Text>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
});
