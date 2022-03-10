import Head from "next/head";
import prisma from "src/utils/prisma";
import { DashboardLayout } from "src/components/dashboard-layout";
import { Container, Typography, Box, Button, TextField } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import TimelineIcon from "@mui/icons-material/Timeline";
import PatientProfile from "src/components/patient/patient-profile";
import { TurnedInTwoTone } from "@mui/icons-material";
import { useRouter } from "next/router";

const Patient = (props) => {
  const router = useRouter();
  const { patient } = props;

  const [formValues, setformValues] = useState({
    Patient_Room: "",
    Doctor_Name: "",
    Diagnosis: "",
    Inspection_code: ""
  });
  const [tab, setTab] = useState("1");

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const reset = (e) => {
    setformValues({Patient_Room: '', Doctor_Name: '', Diagnosis: '', Inspection_code: ''})
  }

//   async function create(data) {
//     try {
//       fetch('/api/patient/order', {
//         method: 'POST',
//         body: JSON.stringify({
//             ...data,
//             Patient_Id: patient.Id
//         }),
//      })


//      reset()
        
//     } catch (error) {
//       console.log(error);
//     }
//   }

  const handleSubmit = async e => {
      e.preventDefault();
      let data = formValues
      // console.log(data)
       try {
           const  req = await fetch("/api/patient/order", {
               method: "POST",
               body: JSON.stringify({
                   ...data,
                   Patient_Id: patient.Id
               })
           })

           const res = await req.json()
           setformValues({Patient_Room: '', Doctor_Name: '', Diagnosis: '', Inspection_code: ''})
           await router.push("/orders");
       } catch (error) {
           console.log(error)
       }

  }

  const handleFormChange = (event) => {
    // console.log("value", event.target.value);
    setformValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Head>
        <title>Patient Detail | Diagnosoft RIS</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              m: -1,
            }}
          >
            <Typography sx={{ m: 1 }} variant="h4">
              Patient Basic Profile
            </Typography>
         
          </Box>

          <Box sx={{ mt: 3 }}>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={tab}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab icon={<AccountBoxIcon />} label="Basic Profile" value="1" />
                    <Tab icon={<TimelineIcon />} label="History" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <PatientProfile patient={patient} />
                </TabPanel>
                <TabPanel value="2">
                  <Box sx={{ width: "50%" }}>
                    <form
                      autoComplete="off"
                      onSubmit={handleSubmit}
                    >
                        <Box sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          label="Inspection Code"
                          size="small"
                          variant="outlined"
                          name="Inspection_code"
                          value={formValues.Inspection_code}
                          onChange={handleFormChange}
                        />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          label="Patient room"
                          size="small"
                          variant="outlined"
                          name="Patient_Room"
                          value={formValues.Patient_Room}
                          onChange={handleFormChange}
                        />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          label="Doctor Name"
                          size="small"
                          name="Doctor_Name"
                          value={formValues.Doctor_Name}
                          variant="outlined"
                          onChange={handleFormChange}
                        />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          label="Reason"
                          size="small"
                          name="Diagnosis"
                          value={formValues.Diagnosis}
                          variant="outlined"
                          onChange={handleFormChange}
                        />
                      </Box>
                      <Button color="primary" variant="contained" size="small" type="submit">
                        Save details
                      </Button>
                    </form>
                  </Box>
                </TabPanel>
              </TabContext>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Patient.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Patient;

export const getServerSideProps = async (context) => {
  try {
    const { id } = context.query;

    const patient = await prisma.patient.findFirst({
      where: {
        Id: {
          equals: parseInt(id),
        },
      },
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
      },
     
    });

    return {
      props: { patient },
    };
  } catch (error) {
    console.log(error);
  }
};
