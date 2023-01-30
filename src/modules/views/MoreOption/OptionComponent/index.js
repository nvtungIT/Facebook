import { View, Text, StyleSheet, Pressable } from 'react-native';
import EditIcon from 'react-native-vector-icons/AntDesign';
import DeleteIcon from 'react-native-vector-icons/AntDesign';

export default OptionComponent = (params) => {
  const { optionNumber } = params;

  if (optionNumber == 1)
    return (
      <View style={styles.option}>
        <EditIcon name="edit" size={20} />
        <Text>{'   '}Sửa bài viết</Text>
      </View>
    );

  if (optionNumber == 2) {
    return (
      <View style={styles.option}>
        <DeleteIcon name="delete" size={20} />
        <Text>{'   '}Chuyển vào thùng rác</Text>
      </View>
    );
  }

  if (optionNumber == 3)
    return (
      <View style={styles.option}>
        <Text>Icon - option {optionNumber}</Text>
      </View>
    );

  if (optionNumber == 4)
    return (
      <View style={styles.option}>
        <Text>Icon - option {optionNumber}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  option: {
    margin: 15,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
});
