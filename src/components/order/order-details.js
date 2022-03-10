import React from "react";
import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import NextLink from "next/link";
// import { useRouter } from "next/router";

export const OrderDetails = () => {
  return (
    <div style={{ border: "1px solid red", margin: 0, padding: 0 }}>
      <Box
        component="main"
        sx={{
          //   alignItems: "center",
          //   display: "flex",
          //   flexGrow: 1,
          minHeight: "100%",
          padding: 1,
        }}
      >
        <NextLink href="/report" passHref>
          <Button component="a" size="small" variant="outlined">
            Report
          </Button>
        </NextLink>
        <Box
          sx={{
            width: "auto",
            height: "auto",
            my: 2,
            //   padding: 2,
            border: "1px solid blue",
          }}
        >
          <Typography variant='h6' sx={{my: 2,}}>Examination Details</Typography>
          <Grid container spacing={1}>
          <>
                <Grid item md={6} xs={12}><Typography>Date</Typography></Grid>
                <Grid item md={6} xs={12}><Typography>John Doe</Typography></Grid>
              </>
              <>
                <Grid item md={6} xs={12}><Typography>Full Name</Typography></Grid>
                <Grid item md={6} xs={12}><Typography>John Doe</Typography></Grid>
              </>
              <>
                <Grid item md={6} xs={12}><Typography>DOB</Typography></Grid>
                <Grid item md={6} xs={12}><Typography>John Doe</Typography></Grid>
              </>
              <>
                <Grid item md={6} xs={12}><Typography>MRN number</Typography></Grid>
                <Grid item md={6} xs={12}><Typography>John Doe</Typography></Grid>
              </>
              <>
                <Grid item md={6} xs={12}><Typography>Modality</Typography></Grid>
                <Grid item md={6} xs={12}><Typography>John Doe</Typography></Grid>
              </>
              <>
                <Grid item md={6} xs={12}><Typography>Resource</Typography></Grid>
                <Grid item md={6} xs={12}><Typography>John Doe</Typography></Grid>
              </>
              <>
                <Grid item md={6} xs={12}><Typography>Reason</Typography></Grid>
                <Grid item md={6} xs={12}><Typography>John Doe</Typography></Grid>
              </>
              <>
                <Grid item md={6} xs={12}><Typography>Exam Status</Typography></Grid>
                <Grid item md={6} xs={12}><Typography>John Doe</Typography></Grid>
              </>
              <>
                <Grid item md={6} xs={12}><Typography>Physician</Typography></Grid>
                <Grid item md={6} xs={12}><Typography>John Doe</Typography></Grid>
              </>
              <>
                <Grid item md={6} xs={12}><Typography>Comments</Typography></Grid>
                <Grid item md={6} xs={12}><Typography>John Doe</Typography></Grid>
              </>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};
