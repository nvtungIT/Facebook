import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  modal_container: {
    width: '100%',
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  info_container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    height: 80,
  },
  avt: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 20,
  },
  right_part: {},
  tab: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',

    height: 50,
    borderWidth: 1,
    alignItems: 'center',
  },
  text: {
    textAlignVertical: 'center',
  },
  icon: {
    fontSize: 30,
    color: 'grey',
  },
})

export default styles
