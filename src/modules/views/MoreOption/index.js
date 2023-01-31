import {
  Dimensions,
  Modal,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  Text,
} from 'react-native';
import OptionComponent from './OptionComponent';
import MinusIcon from 'react-native-vector-icons/AntDesign';
import { delete_post } from 'modules/screens/HomeScreen/function/delete_post';
import ScreenNames from 'general/constants/ScreenNames';

export default MoreOption = (params) => {
  const {
    visible,
    setvisible,
    post,
    updatePosts,
    navigate,
    handleAfterEditPost,
    isposter,
  } = params;

  const onEdit = () => {
    navigate.navigate(ScreenNames.addPostScreen, {
      postEdit: post,
      handleAfterEditPost: handleAfterEditPost,
    });
    setvisible(false);
  };
  const onDelete = () => {
    console.log('delete');
    let postId = post.id;
    delete_post(postId);
    setvisible(false);
    updatePosts(postId);
  };
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalView}>
        <Pressable style={styles.darkArea} onPress={() => setvisible(false)} />
        <View style={styles.whiteArea}>
          <View style={styles.blackIconBox}>
            <MinusIcon name="minus" size={45} style={{ margin: -20 }} />
          </View>
          <ScrollView style={styles.optionsArea}>
            {isposter && (
              <Pressable onPress={onEdit}>
                {/* edit post option*/}
                <OptionComponent optionNumber={1} />
              </Pressable>
            )}
            {isposter && (
              <Pressable onPress={onDelete}>
                {/* delete post option*/}
                <OptionComponent optionNumber={2} />
              </Pressable>
            )}
            {/* <Pressable>
              <OptionComponent optionNumber={3} />
            </Pressable>
            <Pressable>
              <OptionComponent optionNumber={4} />
            </Pressable> */}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  darkArea: {
    width: Dimensions.get('window').width,
    flex: 1,
  },
  whiteArea: {
    backgroundColor: '#e6e6e6',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  blackIconBox: {
    alignItems: 'center',
    marginTop: 10,
  },
  optionsArea: {
    backgroundColor: '#ffffff',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    borderRadius: 8,
    padding: 10,
  },
});
