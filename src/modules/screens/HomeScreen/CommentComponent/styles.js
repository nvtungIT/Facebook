import { Dimensions, StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  singlecomment: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    paddingLeft: 5,
    paddingRight: 40,
  },
  commentbox: {
    notIncludeTime: {
      borderRadius: 15,
      padding: 10,
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor: '#f0f2f5',
    },
    time: {
      paddingLeft: 5,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16,
    },

    padding: 5,
    marginLeft: 5,
  },
  avaUser: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  inputcontainer: {
    sendIconStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
    },
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
    borderTopColor: '#f0f2f5',
    borderColor: 'white',
    borderWidth: 1,
  },
  commentinput: {
    flex: 1,
    borderRadius: 20,
    paddingLeft: 20,
    marginLeft: 10,
    height: 40,
    backgroundColor: '#f0f2f5',
  },
});
