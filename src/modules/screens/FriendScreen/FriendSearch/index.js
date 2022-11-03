import {View, Text, StyleSheet} from 'react-native';
export default function FriendSearch() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: 'FACEBOLF',
          fontSize: 30,
          fontWeight: 'bold',
          color: 'black',
        }}
      >
        Bạn bè{' '}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: '#ffffff',
  },
});
