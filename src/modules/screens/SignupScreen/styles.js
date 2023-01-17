import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 1000 ,
        backgroundColor: '#fff',
    },
    imageSignUp: {
        height: 200,
        width: 400,
        marginTop: 100,
    },
    form: {
        color: 'black',
        fontSize: 30,
    },
    formNavigate: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#8a8b8d",
        paddingLeft: 5,
    },
    icon: {
        color: "black",
        fontSize: 20,
        paddingRight: 20,
    },
    formNavigateLabel: {
        color: "black",
        fontSize: 20,
    },
    form: {
        padding: 20,
        marginTop:100,
    },
    formLabel: {
        color: 'black',
        fontSize: 20,
        textAlign: "center",
    },
    formNote: {
        textAlign: "center",
        color: "black",
    },
    inputGroup: {
        display: "flex",
        flexDirection: "row",
        marginTop: 30,
    },
    formInput: {
        flex:1,
        margin: 3,
        borderBottomWidth: 1,
        color: "black",
        borderBottomColor: "#8a8b8d",
    },
    buttonView: {
        marginTop: 100,
    },
    errorMessage: {
        color:'red',
        textAlign: "center",
    }
})

export default styles;