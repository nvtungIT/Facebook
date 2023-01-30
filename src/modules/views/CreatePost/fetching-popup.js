import { Text, View, Image } from 'react-native';
import styles from './styles';

export default Fetching = () => {
  return (
    <View style={styles.popupWrapper}>
      <View style={styles.popupContent}>
        <Text>Is Fetching</Text>
        <Image
          source={require('assets/images/loading.gif')}
          style={styles.imageLoading}
        />
      </View>
    </View>
  );
};
