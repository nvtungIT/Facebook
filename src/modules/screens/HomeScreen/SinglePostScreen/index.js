import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import PostComponent from '../postComponent';

export default function SinglePostScreen({ navigation, route }) {
  const { post } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 30, height: 30 }}
            source={{
              uri: 'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
            }}
          />
        </Pressable>
        <PostComponent post={post} type={'single'} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
    // marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
