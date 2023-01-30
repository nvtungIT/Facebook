import React from 'react'
import { Modal, Text, Pressable, View, ScrollView } from 'react-native'
import styles from 'modules/views/CreatePost/styles'
import FeatherIcon from 'react-native-vector-icons/Feather'
import icons from 'general/constants/icon'

function Feeling({ setModalVisible, setStatus }) {
  const closeModal = () => {
    setModalVisible(false)
  }
  const selectFeeling = (item) => {
    setStatus(item.label)
    closeModal()
  }

  return (
    <Modal animationType="slide" transparent={true}>
      <View style={styles.postCreater}>
        <ScrollView style={{ ...styles.scrollView, marginBottom: 0 }}>
          <View
            style={[
              styles.wrapper,
              styles.header,
              { justifyContent: 'center' },
            ]}
          >
            <Pressable
              onPress={closeModal}
              style={{ position: 'absolute', left: 10 }}
            >
              <FeatherIcon name="x" size={30} color="black" />
            </Pressable>
            <Text style={{ ...styles.boldText }}>
              Bạn đang cảm thấy thế nào?
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {icons.map((item, id) => {
              return (
                <View key={id} style={styles.iconWrapper}>
                  <Pressable onPress={() => selectFeeling(item)}>
                    <Text
                      style={{ fontSize: 18 }}
                    >{`${item.icon} ${item.label}`}</Text>
                  </Pressable>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
    </Modal>
  )
}

export default Feeling
