import { Grid, Box, Typography, Divider } from "@mui/material";
import React from "react";

export default function PatientProfile(props) {
  const { patient } = props;
  return (
    <>
      <Grid container spacing={1}>
        <Grid item md={4} xs={12}>
          <Box sx={{ height: "100%" }}>
            <Box sx={{ backgroundColor: "#fff", width: "100%", height: "100%" }}>
              <Box sx={{ backgroundColor: "neutral.600", py: 1, px: 2 }}>
                <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                  {patient.Name}
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ py: 1, px: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Typography>Image</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item md={8} xs={12}>
          <Box sx={{ backgroundColor: "#fff", width: "100%" }}>
            <Box sx={{ py: 1, px: 2 }}>
              <Grid container spacing={1}>
                <Grid item md={6}>
                  <Box sx={{ display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Name</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {patient.Name}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Id Number</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {patient.Id_Number}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Identity Type</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {patient.Identity_Type}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Place of Birth</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {patient.Place_of_Birth}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Gender</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {patient.Gender}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Mobile Number</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2"> : {patient.Mobile_Number}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Email</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {patient.Email}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Profession</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {patient.Profession}</Typography>
                    </Grid>
                  </Box>
                </Grid>

                <Grid item md={6}>
                  <Box sx={{ display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Address</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {patient.Address}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">District</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {patient.District}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">City</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {patient.City}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Marriage status</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {patient.Marriage_Status}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Religion</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {patient.Religion}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Citizenship</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {patient.Citizenship}</Typography>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
