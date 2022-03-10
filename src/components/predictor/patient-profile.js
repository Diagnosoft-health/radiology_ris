import { Grid, Box, Typography, Divider } from "@mui/material";
import React from "react";

export default function PatientProfile(props) {
  const { visit } = props;
  return (
    <>
      <Box sx={{background: "#fff"}}>
        <Typography variant="h5" sx={{px:1, py:1}}>Examination Details</Typography>
        <Divider />
        <Grid container spacing={0}>
          <Grid item md={6} xs={12}>
            <Box sx={{ backgroundColor: "#fff", width: "100%" }}>
              <Box sx={{ py: 1, px: 2 }}>
                <Grid container spacing={0}>
                  <Grid item md={12}>
                    <Box sx={{ display: "flex" }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="subtitle3">Name</Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2">: {visit.Patient.Name}</Typography>
                      </Grid>
                    </Box>

                    <Box sx={{ display: "flex" }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="subtitle3">Id Number</Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2">: {visit.Patient.Id_Number}</Typography>
                      </Grid>
                    </Box>

                    <Box sx={{ display: "flex" }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="subtitle3">Identity Type</Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2">: {visit.Patient.Identity_Type}</Typography>
                      </Grid>
                    </Box>

                    <Box sx={{ display: "flex" }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="subtitle3">Place of Birth</Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2">: {visit.Patient.Place_of_Birth}</Typography>
                      </Grid>
                    </Box>

                    <Box sx={{ display: "flex" }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="subtitle3">Gender</Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2">: {visit.Patient.Gender}</Typography>
                      </Grid>
                    </Box>

                    <Box sx={{ display: "flex" }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="subtitle3">Mobile Number</Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2"> : {visit.Patient.Mobile_Number}</Typography>
                      </Grid>
                    </Box>

                    <Box sx={{ display: "flex" }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="subtitle3">Allergies</Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2">
                          : {visit.Patient.Allergies ? visit.Patient.Allergies : "none"}
                        </Typography>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid item md={6} xs={12}>
            <Box sx={{ backgroundColor: "#fff", width: "100%" }}>
              <Box sx={{ py: 1, px: 2 }}>
                <Grid container spacing={1}>
                  <Grid item md={12}>
                    <Box sx={{ display: "flex" }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="subtitle3">Inspection Code</Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2">: {visit.Inspection_code}</Typography>
                      </Grid>
                    </Box>

                    <Box sx={{ display: "flex" }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="subtitle3">Patient Room</Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2">: {visit.Patient_room}</Typography>
                      </Grid>
                    </Box>

                    <Box sx={{ display: "flex" }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="subtitle3">Doctor Name</Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2">: {visit.Doctor_Name}</Typography>
                      </Grid>
                    </Box>

                    <Box sx={{ display: "flex" }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="subtitle3">Reason</Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2">: {visit.Diagnosis}</Typography>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
