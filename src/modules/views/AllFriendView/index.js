import FriendItem from 'modules/components/FriendItem'
import React from 'react'
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native'
import { FriendDataTest } from 'assets/FriendDataTest'
import SortFriendModal from '../SortFriendModal'
import { useState } from 'react'
import ViewHeader from 'modules/components/ViewHeader'
export default function AllFriendView({ navigation }) {
  const [isSortFriendModal, setIsSortFriendModal] = useState(false)

  return (
    <SafeAreaView>
      <ViewHeader title="Bạn bè" navigation={navigation} />

      <SortFriendModal
        isVisible={isSortFriendModal}
        onModalHidden={() => {
          setIsSortFriendModal(false)
        }}
      />
      <ScrollView>
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
          <TouchableOpacity
            style={{}}
            onPress={() => {
              setIsSortFriendModal(true)
            }}
          >
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
      </ScrollView>
    </SafeAreaView>
  )
}
