const { StyleSheet, Dimensions } = require('react-native');
const window = Dimensions.get('window');

export default styles = (type) =>
  StyleSheet.create({
    oneImage: {
      width: window.width,
      height: window.height / 3,
    },
    twoImage: {
      flex: 1,
      height: type != 'single' ? window.height / 3 : 1000,
      flexDirection: type == 'single' ? 'column' : 'row',
    },
    threeImage: {
      flex: 1,
      height: type != 'single' ? window.height / 3 : 1500,
      flexDirection: type == 'single' ? 'column' : 'row',
    },
    fourImage: {
      flex: 1,
      height: type != 'single' ? window.height / 3 : 2000,
      flexDirection: type == 'single' ? 'column' : 'row',
    },
    image: {
      margin: type == 'single' ? 10 : 2,
      flex: 1,
    },
  });
