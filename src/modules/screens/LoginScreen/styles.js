import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  under_border_small: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginHorizontal: 3,
  },
  under_border: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
    marginHorizontal: 3,

  },
  inputText: {
    fontSize: 18,
    marginLeft: 1
  },
  grayBackground: {
    backgroundColor: 'gray'
  },
  hide: {
    opacity: 0
  },

  btn: {
    textAlign: 'center',
    fontSize: 14,
  },

  loginBtn: {
    backgroundColor: 'blue',
  }
})

export default styles;