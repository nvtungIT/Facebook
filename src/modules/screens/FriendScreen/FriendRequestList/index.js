import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { FriendDataTest } from '../../../../assets/FriendDataTest'
import FriendChoiceItem from 'modules/components/FriendChoiceItem'
export default function FriendRequestList() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getRequestedFriendList = async () => {}

  useEffect(() => {
    getRequestedFriendList()
  }, [])
  return (
    <View>
      <Text
        style={{
          fontFamily: 'FACEBOLF',
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginLeft: 20,
          lineHeight: 40,
        }}
      >
        Lời mời kết bạn
      </Text>
      {FriendDataTest.map((item) => (
        <FriendChoiceItem
          first_button="Chấp nhận"
          second_button="Xoá"
          key={item.id}
          avt={item.avtUrl}
          name={item.name}
        />
      ))}
    </View>
  )
}
