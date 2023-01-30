import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: 'white',
    fontFamily: 'Roboto',
  },
  topPart: {
    posterStatus: {
      fontSize: 16,
      fontWeight: '400',
    },
    goBackIcon: {
      paddingLeft: 5,
    },
    posterInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 5,
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
    flex: 1,
    alignItems: 'center',
  },

  contentPart: {
    textPart: {
      paddingLeft: 8,
      paddingRight: 8,
      paddingBottom: 8,
    },
  },
  postImg: {
    width: window.width,
    height: window.height / 3,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  bottomPart: {
    part1: {
      flexDirection: 'row',
      flex: 1,
      padding: 5,
      marginLeft: 10,
      marginRight: 10,
    },
    part2: {
      flexDirection: 'row',
      flex: 1,
      padding: 10,
      marginLeft: 10,
      marginRight: 10,
      borderTopColor: '#ECECEC',
      borderBottomColor: '#ececec',
      borderWidth: 1,
      borderColor: 'white',
    },
    likeNcommentButton: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
});
