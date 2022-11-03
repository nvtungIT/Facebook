import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 1000 ,
        backgroundColor: '#242527',
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
        color: "#8a8b8d",
        fontSize: 20,
        paddingRight: 20,
    },
    formNavigateLabel: {
        color: "#8a8b8d",
        fontSize: 20,
    },
    form: {
        padding: 20,
        marginTop:100,
    },
    formLabel: {
        color: 'white',
        fontSize: 20,
        textAlign: "center",
    },
    formNote: {
        textAlign: "center",
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