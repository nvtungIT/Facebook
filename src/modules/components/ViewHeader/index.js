import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'

export default function ViewHeader(props) {
  const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 50,
      justifyContent: 'space-between',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      borderBottomColor: '#d4d2d2',
      borderBottomWidth: 1,
    },

    header_text: {
      fontSize: 18,

      color: 'black',
    },

    button: {
      width: 60,
      height: 50,
      justifyContent: 'center',
      // backgroundColor: 'red',
    },

    icon: {
      color: 'black',
      marginLeft: 20,
    },
    textView: {
      flex: 1,
      height: 50,
      justifyContent: 'center',
    },
  })
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.button}
      >
        <Icon style={styles.icon} size={25} name="arrow-left" />
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.header_text}>{props.title}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Icon style={styles.icon} size={25} name="search" />
      </TouchableOpacity>
    </View>
  )
}
