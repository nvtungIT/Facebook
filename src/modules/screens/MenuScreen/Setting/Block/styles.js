import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#fff",
        padding: 20
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

    },
    nameItem: {
        color: 'black'
    },
    textBlock: {
        color: 'black'
    },
    textNoteResult: {
        color: 'black'
    },

})

export default styles