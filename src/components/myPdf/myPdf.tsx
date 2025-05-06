import { Page, Text, PDFViewer, View, Document, PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { styles } from "./style.ts"
import { Table, TH, TD, TR } from "@ag-media/react-pdf-table"

export default function MyPdf({ data1, data2 }) {
    const MyDocumentPdf = ({ data1, data2 }) => (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <View>
                    <Text style={[styles.headerTitle, styles.textBold]}>Header 1</Text>
                    <Text>Header 2</Text>
                </View>
                <View style={styles.spaceY}>
                    <Text style={styles.textBold}>Company Name</Text>
                    <Text>Adress</Text>
                    <Text>Phone number</Text>
                </View>
            </View>
            <View style={styles.text}>
                <Text style={[styles.title, styles.textBold]}>Title 1</Text>
                <View>
                    <Text style={styles.subTitle}>Title 2</Text>
                    <Text style={styles.paragraph}>
                        &nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, leo interdum tristique commodo, risus sapien laoreet mauris, nec fringilla ipsum augue ac tortor. Vivamus rhoncus et ipsum non convallis. Nunc eu sapien aliquam mauris pretium suscipit. Fusce sodales urna neque, non tristique urna convallis ac. Aliquam gravida tempus ligula sit amet porta. Duis feugiat velit eget velit commodo fringilla. Vestibulum sit amet sollicitudin augue. In faucibus tincidunt est, eu dignissim lorem vehicula fermentum.
                    </Text>
                    <Text>
                        &nbsp;&nbsp;&nbsp;&nbsp;Vivamus arcu enim, consequat quis dolor id, pretium molestie elit. Suspendisse aliquam dapibus quam in vestibulum. Curabitur fringilla diam turpis, quis iaculis est lobortis vitae. Etiam tortor massa, feugiat at viverra in, faucibus a urna. Quisque enim leo, auctor at eleifend quis, rhoncus vitae ligula. Nunc pellentesque laoreet neque, sit amet suscipit massa consequat eu. Curabitur ac justo mattis erat facilisis rutrum vitae posuere ex. Phasellus iaculis lacus a massa posuere volutpat. Aenean efficitur condimentum lacus vitae mattis.
                    </Text>
                </View>
            </View>

            <Table style={styles.table}>
                <TH style={[styles.tableHeader, styles.textBold]}>
                    <TD style={styles.td}>Header 1</TD>
                    <TD style={styles.td}>Header 2</TD>
                </TH>
                <TR>
                    <TD style={styles.td}>{data1}</TD>
                    <TD style={styles.td}>{data2}</TD>
                </TR>
            </Table>
          </Page>
        </Document>
    );

    return (
        <div className="max-w-2xl mx-auto">
            <div className="w-full h-[750px]">
                <PDFViewer width="100%" height="100%">
                    <MyDocumentPdf data1={data1} data2={data2}/>
                </PDFViewer>
            </div>
            <div className="mt-6 flex justify-center">
                <PDFDownloadLink document={<MyDocumentPdf data1={data1} data2={data2}/>} fileName="fileName.pdf">
                    <button className="flex items-center bg-blue-600 text-white px-4 py-4">
                        Download PDF
                    </button>
                </PDFDownloadLink>
            </div>
        </div>
    )
}