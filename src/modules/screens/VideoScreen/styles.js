import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
    },
    navbarWatch: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 5,
        paddingBottom: 10,
    },
    labelNav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
        marginLeft: 15,
        marginRight: 15,
    },
    labelWatch : {
        color: "black",
        fontSize: 25,
        fontWeight: "700",
    },
    iconSearch: {
        color: "black",
        fontSize: 20,
        width: 35,
        height: 35,
        borderRadius: 35,
        backgroundColor: "#ddd",
        padding: 6,
    },
    watchTag: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    listTag : {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "#ddd",
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5,
    },
    iconTag : {
        fontSize: 15,
        color: "black",
        marginRight: 5,
    },
    labelTag: {
        color: "black",
        fontSize: 15,
        fontWeight: "500",
    }
})

export default styles