import {View, Image, Text} from 'react-native';
import AppImage from '../../../general/constants/AppImage';
export default function AppHeader(props) {
  return (
    <View
      style={{
        height: 45,
        width: '100%',
        backgroundColor: 'white',
      }}
    >
      <Text
        style={{
          fontFamily: 'FACEBOLF',
          color: '#1778F2',
          fontWeight: '900',
          fontSize: 25,
          lineHeight: 45,
          paddingLeft: 10,
        }}
      >
        facebook
      </Text>
    </View>
  );
}
