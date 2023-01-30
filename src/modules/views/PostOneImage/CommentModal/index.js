import { Modal, Pressable, Text, View } from 'react-native';
import styles from './styles';

export default CommentModal = (params) => {
  const { visible, setvisible } = params;
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.wrapper}>
        <Pressable style={styles.blurPart} onPress={() => setvisible(false)} />
        <View style={styles.contentPart}>
          <Text>Comment show here//</Text>
        </View>
      </View>
    </Modal>
  );
};
