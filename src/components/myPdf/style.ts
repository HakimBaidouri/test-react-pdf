import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        color: '#262626',
        fontFamily: 'Helvetica',
        fontSize: 12,
        padding: '30px 50px',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    headerTitle:{
        fontSize: 24,
    },
    textBold: {
        fontFamily: 'Helvetica-Bold',
    },
    spaceY: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
    },
    text:{
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
    subTitle: {
        fontSize: 18,
        marginBottom: 10
    },
    paragraph: {
        marginBottom: 5
    },
    table: {
        width: '100%',
        borderColor: '1px solid #f3f4f6',
        margin: '20px 0'
    },
    tableHeader: {
        backgroundColor: '#e5e5e5'
    },
    td: {
        padding: 6,
    }
})