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

  camera_icon_container_cover: {
    backgroundColor: AppColors.grey,
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: windowHeight / 3 - 60,
    marginLeft: windowWidth - 60,
    zIndex: 1,
  },
  line: {
    borderColor: AppColors.lightGrey,
    borderBottomWidth: 1,
  },
  detail_view: {
    justifyContent: 'center',
  },
  more_button_container: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  edit_profile_button: {
    width: '83%',
    height: 40,
    backgroundColor: AppColors.lightGrey,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    direction: 'flex',
    flexDirection: 'row',
  },
  edit_button_text: {
    color: AppColors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
    marginLeft: 5,
  },
  more_button: {
    width: '15%',
    height: 40,
    backgroundColor: AppColors.lightGrey,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    direction: 'flex',
    flexDirection: 'row',
  },
  detail_text: {
    marginLeft: 20,
    color: AppColors.black,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  detail_container: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
    marginVertical: 10,
  },
})

export default styles
