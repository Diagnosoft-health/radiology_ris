import Head from 'next/head';
import { Box, Container, Typography,Button } from '@mui/material';
import { CustomerListResults } from '../components/patient/patient-list-results';
import { CustomerListToolbar } from '../components/patient/patient-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';

const Worklist = () => (
  <>
    <Head>
      <title>
        Worklist | Diagnosoft RIS
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
     <Typography  sx={{ m: 4 }}
        variant="h4">Worklist</Typography>

<Button sx={{ m: 5}}
          color="primary"
          variant="contained"
        >
          Demo
        </Button>
    </Box>
   
  </>
);
Worklist.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Worklist;
