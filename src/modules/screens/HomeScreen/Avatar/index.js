import ScreenNames from 'general/constants/ScreenNames';
import { Image, Pressable } from 'react-native';
import styles from './styles';

export default Avatar = (params) => {
  const { url, navigate } = params;
  const avatarSrc =
    url != null && url != undefined && url != ''
      ? { uri: url }
      : require('assets/images/default_avafb.jpg');

  const navigateToProfile = () => {
    navigate.navigate(ScreenNames.profileView);
  };

  return (
    <Pressable onPress={navigateToProfile}>
      <Image style={styles.avaImg} source={avatarSrc} />
    </Pressable>
  );
};
