import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   wrapper: {
      backgroundColor: '#fff'
   },
   label: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    paddingBottom: 10,
    padding: 20,
   },
   item: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    padding: 20
   },
   labelItem: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
   },
   linkItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
   },
   iconKey: {
    fontSize: 25,
    width: "10%"
   },
   itemText: {
      width: "80%"
   },
   textLabel: {
    fontSize: 18,
    color: 'black'
   },
   textNote: {
    fontSize: 15,
    color: '#888'
   },
   iconNext: {
    fontSize: 40,
   },


   wrapperChangePass: {
      backgroundColor: "#fff",
      paddingTop: 15,
      padding: 10,
   },
   inputItem: {
      
      paddingBottom: 5,
      paddingTop: 5,
   },
   formInput: {
      color: 'black',
      padding: 10,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 4
   },
   buttonGroup: {
      paddingTop: 20,
      paddingBottom: 10,
   },
   buttonUpdate: {
      padding: 8,
      backgroundColor: '#3284ef',
      borderRadius: 2,
      alignItems:'center',
      marginBottom: 8,
   },
   textButtonUpdate: {
      color:'#fff'
   },
   buttonCancel: {
      padding: 6,
      backgroundColor: '#fff',
      borderRadius: 2,
      alignItems:'center',
      borderWidth: 0.5,
      borderColor: '#aaa'
   },
   textButtonCancel: {
      color:'black'
   },
  
     errorMessage: {
      color:'red',
      textAlign: "center",
      }
})

export default styles