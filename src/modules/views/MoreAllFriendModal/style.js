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
    height: 80,
    borderBottomColor: '#d4d2d2',
    borderBottomWidth: 1,
    paddingLeft: 20,
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

  tab: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  text: {
    textAlignVertical: 'center',
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 16,
  },
  icon: {
    fontSize: 30,
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  icon_container: {
    width: 65,
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
})

export default styles
