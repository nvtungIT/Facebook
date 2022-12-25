import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  modal_container: {
    height: 200,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginHorizontal: '10%',
  },

  title: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
  },

  text: {
    textAlignVertical: 'center',
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 16,
  },
  text_container: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
  },
  first_button: {
    width: '30%',
    backgroundColor: '#1778F2',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '15%',
  },
  second_button: {
    width: '30%',
    backgroundColor: '#d4d2d2',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '15%',
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: '100%',
    height: '50%',
  },

  button_text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
})

export default styles
