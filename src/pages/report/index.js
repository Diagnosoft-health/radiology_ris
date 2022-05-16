import Head from "next/head";
import React from "react";
import { Box, Container } from "@mui/material";
import prisma from "src/utils/prisma";
import { DashboardLayout } from "../../components/dashboard-layout";
import CssBaseline from "@mui/material/CssBaseline";
import { ReportListToolbar } from "../../components/report/order-list-toolbar";
import { ReportListResults } from "src/components/report/report-list-results";

// export const getStaticProps = async () => {
//   return {
//     props: {
//       orders: orders
//     }
//   }
// }


const Reports = (props) => {
 
  const { reports } = props;


  return (
    <>
      <Head>
        <title>Reports | Diagnosoft RIS</title>
      </Head>

      <Box
        // component="main"
        sx={{
          flexGrow: 1,
          py: 3,
        }}
      >
        <CssBaseline />
          <Container maxWidth={false}>
            <ReportListToolbar />
            <Box sx={{ mt: 3 }}>
              <ReportListResults orders={reports} />
            </Box>
          </Container> 
      </Box>
    </>
  );
};
Reports.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Reports;

export async function getServerSideProps() {
  try {
    const reports = await prisma.examinationRequest.findMany({
    //   where: { uploaded },
      orderBy: {
        Inspection_code: "desc",
      },
      include: {
        Patient: {
          select: {
            Name: true,
            Id_Number: true,
            Place_of_Birth: true,
            Identity_Type: true,
            Gender: true,
            Mobile_Number: true,
            Allergies: true,
          },
        },
      },
    });
    // console.log(orders);
    return {
      props: { reports },
    };
  } catch (error) {
    console.log(error);
  }
}
