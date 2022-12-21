import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
} from 'react-native';
import PostComponent from '../postComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SinglePostScreen({ navigation, route }) {
  const { post } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={false} style={styles.scrollView}>
        <Pressable
          style={styles.goBackIcon}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={25} color="black" />
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
  goBackIcon: {
    position: 'absolute',
    zIndex: 1,
    paddingTop: 25,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 42,
  },
});
