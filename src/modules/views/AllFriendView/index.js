import FriendItem from 'modules/components/FriendItem'
import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { FriendDataTest } from 'assets/FriendDataTest'
export default function AllFriendView({ navigation }) {
  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <Text
          style={{
            marginLeft: 20,
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          53 bạn bè
        </Text>
        <TouchableOpacity style={{}}>
          <Text
            style={{
              marginRight: 20,
              fontSize: 18,
              color: '#1778F2',
              fontWeight: '600  ',
            }}
          >
            Sắp xếp
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {FriendDataTest.map((item) => (
          <FriendItem key={item.id} avt={item.avtUrl} name={item.name} />
        ))}
      </View>
    </SafeAreaView>
  )
}
