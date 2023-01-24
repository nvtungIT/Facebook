import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#fff",
        flex: 1
    },
    title: {
        color:'black',
        fontSize: 25,
        fontWeight: '600',
        padding: 10
    },
    group: {
        padding: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        width: '100%',
    },
    labelGroup: {
        color: "black",
        fontSize: 20,
        fontWeight: "700"
    },
    item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5,
        alignItems: "center",
    },
    iconUser: {
        color: "black",
        fontSize: 20,
        padding: 10,
    },
    iconKey: {
        color: "#555",
        fontSize: 20,
    },
    iconRight: {
        color: "#555",
        fontSize: 35,
    },
    labelItem: {
        color: "black",
        fontSize: 18,
        fontWeight: "400"
    },
    noteItem: {
        color: "#888",
        fontSize: 15,
    },
    textGroup: {
        width:'90%'
    },


    form: {
        padding: 15
    },
    input: {
        marginTop: 5,
        marginBottom: 5,
        color: 'black',
        padding: 10,
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 4
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
        }
})

export default styles