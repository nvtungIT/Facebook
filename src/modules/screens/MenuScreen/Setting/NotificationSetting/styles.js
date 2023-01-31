import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    backgroundColor: '#fff'
  },
  headerText: {
    paddingHorizontal: 15
  },
  itemWrapper: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  header: {
    fontSize: 20,
    color: 'black',
    fontWeight: "700",
    padding: 15,
    // marginTop: 15
    // backgroundColor: '#000',
  },
  icon: {
    fontSize: 24,
    fontWeight: 100,
    color: '#666666'
  },
  titleText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 17,
  },
  normalText: {
    fontSize: 13
  },
  title: {
    fontSize: 24,
  },
})

export default styles