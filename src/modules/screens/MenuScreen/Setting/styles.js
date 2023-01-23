import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#fff",
        flex: 1
    },
    group: {
        padding: 10,
    },
    labelGroup: {
        color: "black",
        fontSize: 20,
        fontWeight: "700"
    },
    noteGroup: {
        color: "#aaa",
        fontSize: 13,
    },
    item: {
        display: "flex",
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 5,
        alignItems: "center"
    },
    iconUser: {
        color: "black",
        fontSize: 20,
        padding: 10,
    },
    icon: {
        color: "black",
        fontSize: 25,
        padding: 10,
    },
    labelItem: {
        color: "black",
        fontSize: 15,
        fontWeight: "600"
    },
})

export default styles