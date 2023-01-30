import { Dimensions, StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(52,52,52,0.5)',
  },
  blurPart: {
    width: Dimensions.get('window').width,
    height: 300,
  },
});
