import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  cardShadow: {
    backgroundColor: 'red',
    zIndex: 0,
  },
  container: {
    flex: 1,
  },
  topPart: {
    goBackIcon: {
      paddingLeft: 5,
    },
    posterInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 5,
    },
    posterStatus: {
      fontSize: 16,
      fontWeight: '400',
    },
    moreicon: {
      flex: 1,
      alignItems: 'flex-end',
      paddingRight: 10,
    },
    avaImg: {
      width: 40,
      height: 40,
      borderRadius: 40,
      margin: 8,
    },
    userNamePart: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    flexDirection: 'row',
    // flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  scrollView: {
    backgroundColor: 'white',
  },
});
