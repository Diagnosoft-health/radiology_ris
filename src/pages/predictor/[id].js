

import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';

import { DashboardLayout } from '../../components/dashboard-layout';
import UploadTest from 'src/components/predictor/UploadTest';
import prisma from 'src/utils/prisma';
import PatientProfile from 'src/components/predictor/patient-profile';

const Predictor = (props) => {
  
  const { visit } = props

  return (
  <>
    <Head>
      <title>
        Predictor | Diagnosoft RIS
      </title>
    </Head>
    <Box>
      <PatientProfile visit={visit}/>
    </Box>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 3
      }}
    >
      <UploadTest />
      
    </Box>
  </>
  )
}; 

Predictor.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Predictor;

export const getServerSideProps = async (context) => {

  try {

    const { id } = context.query
    
    const visit = await prisma.examinationRequest.findFirst({
      where: {
        Inspection_code: {
          equals: parseInt(id)
        }
      },
      include: {
        Patient : {
          select : {
        Name: true,
        Id_Number: true,
        Place_of_Birth: true,
        Identity_Type: true,
        Gender: true,
        Mobile_Number: true,
        Allergies: true,
          }
        }
      }

    })
    // console.log(visit)
    return {
      props: { visit }
    }
  } catch (error) {
    console.log(error)
  }

  
}
