import React from 'react'
import { Text, View } from 'react-native'
export default function SuggestedFriendView({ navigation }) {
  return (
    <View>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 20,
        }}
      >
        Những người bạn có thể biết
      </Text>
    </View>
  )
}
