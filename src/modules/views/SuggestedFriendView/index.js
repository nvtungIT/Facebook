import React from 'react'
import { Text, View, ScrollView, SafeAreaView } from 'react-native'
import { FriendDataTest } from 'assets/FriendDataTest'
import FriendChoiceItem from 'modules/components/FriendChoiceItem'
import ViewHeader from 'modules/components/ViewHeader'

export default function SuggestedFriendView({ navigation }) {
  return (
    <SafeAreaView>
      <ViewHeader title="Gợi ý" navigation={navigation} />
      <ScrollView>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 20,
            marginVertical: 10,
          }}
        >
          Những người bạn có thể biết
        </Text>
        {FriendDataTest.map((item) => (
          <FriendChoiceItem
            isSuggestedFriend={true}
            first_button="Thêm bạn bè"
            second_button="Gỡ"
            key={item.id}
            avt={item.avtUrl}
            name={item.name}
            firstTaskName="gửi lời mời kết bạn cho "
            secondTaskName="gỡ gợi ý kết bạn của"
            firstTaskResponse="Đã gửi yêu cầu"
            secondTaskResponse="Đã gỡ lời mời"
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
