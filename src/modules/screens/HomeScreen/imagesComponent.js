import { View, Image, StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

const Image1 = ({ type, image }) => {
  return (
    <View style={styles.oneImage}>
      <Image style={{ flex: 1 }} source={{ uri: image[0].url }} />
    </View>
  );
};

const Image2 = ({ type, image }) => {
  return (
    <View
      style={[
        styles.twoImage,
        { flexDirection: type == 'single' ? 'column' : 'row' },
      ]}
    >
      <Image style={{ flex: 1 }} source={{ uri: image[0].url }} />
      <Image style={{ flex: 1 }} source={{ uri: image[1].url }} />
    </View>
  );
};

const Image3 = ({ type, image }) => {
  return (
    <View style={styles.threeImage}>
      <View style={{ flex: 1 }}>
        <Image style={{ flex: 1 }} source={{ uri: image[0].url }} />
        <Image style={{ flex: 1 }} source={{ uri: image[1].url }} />
      </View>
      <View style={{ flex: 1 }}>
        <Image style={{ flex: 1 }} source={{ uri: image[2].url }} />
      </View>
    </View>
  );
};

const Image4 = ({ type, image }) => {
  return (
    <View style={styles.fourImage}>
      <View style={{ flex: 1 }}>
        <Image style={{ flex: 1 }} source={{ uri: image[0].url }} />
        <Image style={{ flex: 1 }} source={{ uri: image[1].url }} />
      </View>
      <View style={{ flex: 1 }}>
        <Image style={{ flex: 1 }} source={{ uri: image[2].url }} />
        <Image style={{ flex: 1 }} source={{ uri: image[3].url }} />
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

export default ImagesComponent = ({ type, image }) => {
  // setTypePost(type);
  var numberImg = image.length;
  numberImg = numberImg > 4 ? 4 : numberImg;
  const ComponentName = components[numberImg];
  return <ComponentName type={type} image={image} />;
};

const styles = StyleSheet.create({
  oneImage: {
    width: window.width,
    height: window.height / 3,
  },
  twoImage: {
    flex: 1,
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
