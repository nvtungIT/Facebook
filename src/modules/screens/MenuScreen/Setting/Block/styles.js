import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#fff",
        padding: 20,
        flex: 1
    },
    textLabel:{
        color:'black',
        fontSize: 15,
    },
    textNote:{
        color: '#888',
        fontSize: 13
    },
    linkAddBlock:{
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center'
    },
    iconPlus:{
        color: '#2374e1',
        fontSize: 40,
        paddingRight: 10
    },
    textAddBlock:{
        color: '#2374e1',
        fontSize: 17,
    },

    wrapperAddBlock:{
        backgroundColor: '#fff'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingLeft: 5,
    },
    iconBack: {
        color: 'black',
        fontSize: 22,
        paddingRight: 20,
        paddingLeft: 10
    },
    inputSearch: {
        backgroundColor: '#f5f5f5',
        borderRadius: 50,
        width: '80%',
        height: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        color: '#888',
        padding: 4,
        paddingLeft: 10,
    },
    iconClear: {
        fontSize: 20,
        paddingRight: 20
    },
    itemResultSearch: {
        padding: 10,
        // paddingBottom: 5,
        // paddingTop: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    nameItem: {
        color: 'black'
    },
    textBlock: {
        color: '#2374e1'
    },
    textNoteResult: {
        color: '#888',
        padding: 10
    },

    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        height: 500,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 3,
        position: 'relative',
    },
    modalTitleWrap: {
        color: 'black',
        marginBottom: 10,
    },
    modalTitle: {
        color: 'black',
        fontSize: 19,
    },
    modalContentWrap: {
        marginBottom: 10,
    },
    modalContent: {
        fontSize: 15,
        padding: 4
    },
    groupButtonModal: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 10
    },
    buttonModalExit: {
    },
    buttonModalBlock: {
    },
    textButtonModalExit: {
        fontSize: 15,
        fontWeight: '600',
        color: 'black',
    },
    textButtonModalBlock: {
        fontSize: 15,
        fontWeight: '600',
        color: '#126cd6',
    },

})

export default styles