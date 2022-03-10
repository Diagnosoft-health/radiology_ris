import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { Box, Container, Typography, Button } from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AddPatientForm } from 'src/components/patient/patient-add-form';



const NewPatient = () => {

    
  return( <>
      <Head>
        <title> New Patient | Diagnosoft RIS</title>
    </Head>
    <Box
      component="main" 
      sx={{
        flexGrow: 1,
        py: 3
      }}
    >
        <Container maxWidth={false}>
        <Box sx={{ my: 1 }}>

        <NextLink href="./" passHref>
            <Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
              Back to patients list
            </Button>
          </NextLink>

              <Typography color="textPrimary" variant="h4">
                Add new patient
              </Typography>
             
            </Box>
       
       <AddPatientForm />
      </Container>
    </Box>
  </>);
  
};

NewPatient.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
export default NewPatient;
