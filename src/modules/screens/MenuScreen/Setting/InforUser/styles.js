import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; 

const styles = StyleSheet.create({
   wrapper: {
    flex: 1,
    backgroundColor: "#f2f2f2"
   },
   itemGroup: {
    width: width,
    display: "flex",
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
   },
   labelName: {
    color: "black",
    fontWeight: "500",
    fontSize: 20,
   },
   name: {
    color: "#888"
   },
   icon: {
    color: "#555",
    fontSize: 35,
   },

   wrapperNameSetting: {
    backgroundColor: "#ddd",
    flex: 1
   },
   formWrapper: {
    backgroundColor: "#fff",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
   },
   form: {
    padding: 10
   },
   labelForm: {
    color: "black",
    fontSize: 15,
    padding: 10,
    fontWeight: "600",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
   },
   item: {
    // padding: 10
   },
   labelInput: {
    color: "black",
    fontSize: 15,
   },
   input: {
    color: 'black',
    padding: 12,
    width: '70%',
    shadowColor: "#000",
    shadowOffset: {
        width: 1,
        height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
   },

   note: {
    backgroundColor: '#f2f2f2',
    borderWidth: 0.5,
    borderRadius: 4,
    padding: 10
   },
   textNote: {
    color: 'black'
   },
   labelNote: {
    color: 'black',
    fontWeight: '600',
   },
   buttonGroup: {
    paddingTop: 20,
    paddingBottom: 10,
   },
   buttonSave: {
    padding: 6,
    backgroundColor: '#3284ef',
    borderRadius: 2,
    alignItems:'center',
    marginBottom: 8,
   },
   textButtonSave: {
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