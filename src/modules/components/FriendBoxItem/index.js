import { AppColors } from 'general/constants/AppColor'
import { Image, View, Text } from 'react-native'
export default function FriendBoxItem(props) {
  return (
    <View
      style={{
        width: '30%',
        height: 175,
        // backgroundColor: 'red',
        margin: 5,
      }}
    >
      <Image
        style={{ width: '100%', height: 125, borderRadius: 10 }}
        source={{ uri: props.avt }}
      />
      <Text
        style={{
          color: AppColors.black,
          fontSize: 15,
          fontWeight: 'bold',
          marginTop: 5,
        }}
      >
        {props.name}
      </Text>
    </View>
  )
}
