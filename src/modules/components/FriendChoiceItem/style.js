import { StyleSheet } from 'react-native'
import { AppColors } from 'general/constants/AppColor'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  left_part: {
    width: '30%',
    height: 100,
    // borderWidth: 1,
    justifyContent: 'center',
  },
  avt: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  right_part: {
    height: 100,
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    // borderWidth: 1,
  },
  name: {
    fontFamily: 'FACEBOLF',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  name_container: {
    justifyContent: 'center',
    marginTop: 10,
  },
  button_container: {
    display: 'flex',

    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  first_button: {
    width: '45%',
    backgroundColor: AppColors.primaryColor,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  second_button: {
    width: '45%',
    backgroundColor: '#d4d2d2',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  button_text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  respond_view: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
    width: '100%',
  },
  cancel_button: {
    backgroundColor: '#d4d2d2',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
})

export default styles
