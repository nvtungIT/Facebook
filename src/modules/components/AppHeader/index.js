import {View, Image, Text} from 'react-native';
import AppImage from '../../../general/constants/AppImage';
import Icon from 'react-native-vector-icons/Fontisto';
export default function AppHeader(props) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
      }}
    >
      <View
        style={{
          height: 45,
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
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: '#d4d2d2',
            width: 35,
            height: 35,
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon size={20} name="search" color="black" />
        </View>
        <View
          style={{
            backgroundColor: '#d4d2d2',
            width: 35,
            height: 35,
            borderRadius: 35,

            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 7.5,
            marginLeft: 5,
          }}
        >
          <Icon size={20} name="messenger" color="black" />
        </View>
      </View>
    </View>
  );
}
