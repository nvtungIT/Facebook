import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
    },
    headerNav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
        marginLeft: 15,
        marginRight: 15,
    },
    labelNav : {
        color: "black",
        fontSize: 25,
        fontWeight: "700",
    },
    icon: {
        color: "black",
        fontSize: 20,
        backgroundColor: "#fff",
    },
    iconSearch: {
        color: "black",
        fontSize: 20,
        width: 35,
        height: 35,
        borderRadius: 35,
        backgroundColor: "#fff",
        padding: 6,
    },
    userName: {
        color: "black"
    },
    dropdownHelpOpen: {
        height: 139,
    },
    dropdownSettingOpen: {
        height: 139,
    },
    dropdownStyle: {
        backgroundColor: "#dfdfdf",
        borderRadius: 0,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },
    dropDownContainerStyle: {
        backgroundColor: "#dfdfdf",
        borderWidth: 0,
        padding: 10,
    },
    listItemLabelStyle: {
        fontSize: 15,
        fontWeight: "600",
    },
    logOut: {
        backgroundColor: "#ccc",
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 8,
    },
    labelLogOut: {
        color: "black",
        fontSize: 15,
        fontWeight: "700",
        padding: 5,
        textAlign: "center",
    }
})

export default styles