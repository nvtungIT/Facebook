import { View, Image, StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

// const [typePost, setTypePost] = useState();

const Image1 = ({ type, imgUrls }) => {
  return (
    <View style={styles.oneImage}>
      <Image style={{ flex: 1 }} source={{ uri: imgUrls[0] }} />
    </View>
  );
};

const Image2 = ({ type, imgUrls }) => {
  return (
    <View style={styles.twoImage}>
      <Image style={{ flex: 1 }} source={{ uri: imgUrls[0] }} />
      <Image style={{ flex: 1 }} source={{ uri: imgUrls[1] }} />
    </View>
  );
};

const Image3 = ({ type, imgUrls }) => {
  return (
    <View style={styles.threeImage}>
      <View style={{ flex: 1 }}>
        <Image style={{ flex: 1 }} source={{ uri: imgUrls[0] }} />
        <Image style={{ flex: 1 }} source={{ uri: imgUrls[1] }} />
      </View>
      <View style={{ flex: 1 }}>
        <Image style={{ flex: 1 }} source={{ uri: imgUrls[2] }} />
      </View>
    </View>
  );
};

const Image4 = ({ type, imgUrls }) => {
  return (
    <View style={styles.fourImage}>
      <View style={{ flex: 1 }}>
        <Image style={{ flex: 1 }} source={{ uri: imgUrls[0] }} />
        <Image style={{ flex: 1 }} source={{ uri: imgUrls[1] }} />
      </View>
      <View style={{ flex: 1 }}>
        <Image style={{ flex: 1 }} source={{ uri: imgUrls[2] }} />
        <Image style={{ flex: 1 }} source={{ uri: imgUrls[3] }} />
      </View>
    </View>
  );
};

const components = {
  1: Image1,
  2: Image2,
  3: Image3,
  4: Image4,
};

export default ImagesComponent = ({ type, imgUrls }) => {
  // setTypePost(type);
  var numberImg = imgUrls.length;
  numberImg = numberImg > 4 ? 4 : numberImg;
  const ComponentName = components[numberImg];
  return <ComponentName type={type} imgUrls={imgUrls} />;
};

const styles = StyleSheet.create({
  oneImage: {
    width: window.width,
    height: window.height / 3,
  },
  twoImage: {
    flex: 1,
    flexDirection: 'row',
    height: window.height / 3,
  },
  threeImage: {
    flex: 1,
    flexDirection: 'row',
    height: 300,
  },
  fourImage: {
    flex: 1,
    flexDirection: 'row',
    height: window.height / 3,
  },
});
