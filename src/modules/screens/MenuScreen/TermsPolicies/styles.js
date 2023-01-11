import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "black",
        padding: 10,
    },
    icon: {
        color: "black",
        fontSize: 25,
        padding: 5,
    },
    textItem: {
        display: "flex"
    },
    labelItem: {
        color: "black",
        fontSize: 15,
        fontWeight:"600"
    },
    noteItem: {
        color: "#aaa",
        fontSize: 12,
    }
})

export default styles