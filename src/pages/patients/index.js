import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { PatientListResults } from '../../components/patient/patient-list-results';
import { CustomerListToolbar } from '../../components/patient/patient-list-toolbar';
import { DashboardLayout } from '../../components/dashboard-layout';

import prisma from 'src/utils/prisma';


const Patients = (props) => {

  const { patientData } = props;

  return(
  
  <>
    <Head>
      <title>
        Patients | Diagnosoft RIS
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <PatientListResults patients={patientData} />
        </Box>
      </Container>
    </Box>
  </>
)};




Patients.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Patients;

export async function getServerSideProps() {
  try {
    const patientData = await prisma.patient.findMany({
      select: {
        Id: true,
        Name: true,
        Id_Number: true,
        Place_of_Birth: true,
        Identity_Type: true,
        Gender: true,
        Mobile_Number: true,
        Email: true,
        Profession: true,
        Address: true,
        Ward: true,
        District: true,
        City: true,
        Marriage_Status: true,
        Religion: true,
        Citizenship: true,
        Allergies: true,
        Emergency_Contact: true,
      }
    });
    
    return {
      props: {
        patientData
      }
    }

  } catch (error) {
    console.log(error)
    // res.status(500).json(error)
    
  }
}