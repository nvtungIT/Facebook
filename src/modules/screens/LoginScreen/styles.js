import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 193
  },

  under_border_small: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    marginHorizontal: 3,
  },
  under_border: {
    borderBottomWidth: 2,
    borderBottomColor: '#0e71e4',
    marginHorizontal: 3,

  },
  inputTextWrap: {
    marginHorizontal: 40,
    paddingHorizontal: 1,
    paddingVertical: 1.5,
  },
  inputText: {
    fontSize: 18,
    marginLeft: 1
  },
  grayBackground: {
    backgroundColor: '#f5f5f5'
  },
  hide: {
    opacity: 0
  },

  titleText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff',
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 2,
    fontWeight: '700'
  },

  titleTextLogin: {
    backgroundColor: '#1a73db',
  },

  titleTextLoginShowUnderlay: {
    fontSize: 15.85,
    paddingVertical: 6.4,
    backgroundColor: '#126cd6',
  },
  titleTextLoginWrap: {
    marginHorizontal: 40,
    marginTop: 15
  },
  titleTextLoginWrapUnderlay: {
    marginHorizontal: 41.5,
    marginTop: 15
  },
  titleTextForgetPassword: {
    color: '#1267c9'
  },
  titleTextForgetPasswordWrap: {
    marginTop: 11,
    marginHorizontal: 120,
    borderRadius: 7
  },
  titleCreateAcc: {
    backgroundColor: '#069e3e'
  },
  titleCreateAccIsPressed: {
    fontSize: 15.85,
    paddingVertical: 6.4,
    backgroundColor: '#019839',
  },
  iconShowPasswordWrap: {
    right: 5,
    top: 12,
    position: 'absolute',
    paddingHorizontal: 3,
    paddingVertical: 2,
    color: '#AD40AF',
    fontWeight: '700',
  },

  iconShowPassword: {
    color: '#AD40AF',
    fontWeight: '700',
  },

  languagues: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    paddingTop: 5
  }

})

export default styles;