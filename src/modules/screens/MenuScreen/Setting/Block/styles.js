import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   wrapper: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 15,
   },
   label: {
    color: 'black',
    fontSize: 20
   },
   note: {
    color: '#888',
    fontSize: 13,
   },

   addBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10
   },
   icon: {
    color: '#1a73e8',
    fontSize: 40
   },
   textAddBlock: {
    paddingLeft: 5,
    color: '#1a73e8',
    fontSize: 18
   },


   wrapperAddBlock: {
      backgroundColor: '#fff',
      flex: 1,
   },
   header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
      paddingLeft: 5,
  },
  iconBack: {
      color: "black",
      fontSize: 20,
      paddingRight: 20,
      marginLeft: 10
  },
  search: {
   backgroundColor: '#eee',
   borderColor: '#888',
   borderWidth: 1,
   borderRadius: 20,
   display: 'flex',
   flexDirection:'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   margin: 8,
   padding: 6,
   width: '80%'
  },
  inputSearch: {
   color: '#888',
   padding: 0,
   fontSize: 13
  },
  iconClear: {
   color: '#888',
   fontSize: 20
  }

})

export default styles