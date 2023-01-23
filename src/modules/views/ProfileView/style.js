import { AppColors } from 'general/constants/AppColor'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
  cover_image_container: { height: windowHeight / 3 + windowWidth / 5 },
  cover_image: { width: '100%', height: windowHeight / 3 },
  avt_container: {
    top: windowHeight / 6,
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
  },
  avt: {
    width: windowWidth / 2,
    height: windowWidth / 2,
    borderRadius: windowWidth / 2,
    borderWidth: 5,
    borderColor: '#ffffff',
  },
  name: {
    textAlign: 'center',
    fontSize: 30,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  camera_icon_container: {
    backgroundColor: AppColors.grey,
    width: 40,
    height: 40,
    borderRadius: 40,
    marginLeft: windowWidth / 2 + windowWidth / 4 - 60,
    marginTop: windowWidth / 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    borderColor: AppColors.lightGrey,
    borderBottomWidth: 1,
  },
  detail_view: {
    justifyContent: 'center',
  },
})

export default styles
