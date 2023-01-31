import { View, Image, StyleSheet, Dimensions } from 'react-native';
import styles from './styles';

const Image1 = ({ type, image }) => {
  return (
    <View style={styles(type).oneImage}>
      <Image style={{ flex: 1 }} source={{ uri: image[0].url }} />
    </View>
  );
};

const Image2 = ({ type, image }) => {
  return (
    <View style={styles(type).twoImage}>
      <Image style={styles(type).image} source={{ uri: image[0].url }} />
      <Image style={styles(type).image} source={{ uri: image[1].url }} />
    </View>
  );
};

const Image3 = ({ type, image }) => {
  return (
    <View style={styles(type).threeImage}>
      <View style={{ flex: 1 }}>
        <Image style={styles(type).image} source={{ uri: image[0].url }} />
        <Image style={styles(type).image} source={{ uri: image[1].url }} />
      </View>
      <View style={{ flex: 1 }}>
        <Image style={styles(type).image} source={{ uri: image[2].url }} />
      </View>
    </View>
  );
};

const Image4 = ({ type, image }) => {
  return (
    <View style={styles(type).fourImage}>
      <View style={{ flex: 1 }}>
        <Image style={styles(type).image} source={{ uri: image[0].url }} />
        <Image style={styles(type).image} source={{ uri: image[1].url }} />
      </View>
      <View style={{ flex: 1 }}>
        <Image style={styles(type).image} source={{ uri: image[2].url }} />
        <Image style={styles(type).image} source={{ uri: image[3].url }} />
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
