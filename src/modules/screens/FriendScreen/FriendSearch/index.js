import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
export default FriendSearch = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontFamily: 'FACEBOLF',
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 20,
            lineHeight: 40,
          }}
        >
          Bạn bè
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#d4d2d2',
            width: 40,
            height: 40,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 15,
          }}
        >
          <Icon size={24} name="search" color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>Gợi ý</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { width: '30%' }]}>
          <Text style={styles.button_text}>Tất cả bạn bè</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    // backgroundColor: 'grey',
  },

  button: {
    width: '15%',
    height: 40,
    borderRadius: 40,
    backgroundColor: '#d2d2d6',
    alignSelf: 'flex-start',
    marginLeft: 20,
    justifyContent: 'center',
  },

  button_text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'FACEBOLF',
  },
})
