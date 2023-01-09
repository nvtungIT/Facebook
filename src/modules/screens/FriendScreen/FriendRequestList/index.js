import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { FriendDataTest } from '../../../../assets/FriendDataTest'
import FriendChoiceItem from 'modules/components/FriendChoiceItem'
export default function FriendRequestList() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    getRequestedFriendList(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGQ2MjM2NGFjNzQxMjAyNDk5ZGNmYSIsImRhdGVMb2dpbiI6IjIwMjMtMDEtMDVUMDQ6NTE6MzkuNTIwWiIsImlhdCI6MTY3Mjg5NDI5OSwiZXhwIjoxNjcyOTgwNjk5fQ.fVA-k5v32Y1RiCYQ5yBQAZJwQOmJ62bFZHVa8JAic5k',
      1,
      10,
    )
  }, [])

  const getRequestedFriendList = async (token, index, count) => {
    try {
      const response = await fetch(
        `http://192.168.226.236:5000/it4788/friend/get_requested_friends`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token,
            index,
            count,
          }),
        },
      )

      const data = await response.json()
      if (data) {
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

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
          firstTaskName="trở thành bạn bè với"
          secondTaskName="xóa lời mời kết bạn của"
          firstTaskResponse="Các bạn đã trở thành bạn bè"
          secondTaskResponse="Đã xóa"
        />
      ))}
    </View>
  )
}
