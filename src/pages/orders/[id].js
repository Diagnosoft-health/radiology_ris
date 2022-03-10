import React from "react";
import Head from "next/head";
// import Image from 'next/image';
import { DashboardLayout } from "../../components/dashboard-layout";
import { orders } from "src/__mocks__/orders";
import { Typography, Box, Grid, Card, CardHeader, Divider } from "@mui/material";
import { format } from "date-fns";
// import ai from "public/static/images/Group.png"
import AiIcon from "src/components/ai";

export async function getStaticProps({ params }) {
  // Fetch necessary data for the order using params.id
  const all = orders.filter((o) => o.id.toString() === params.id);
  return {
    props: { order: all[0] },
  };
}

export async function getStaticPaths() {
  //     // Return a list of possible value for id

  const paths = orders.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

const Order = ({ order }) => (
  <>
    <Head>
      <title>Patients | Diagnosoft RIS</title>
    </Head>

    <Box sx={{ padding: 1 }}>
      <Grid container spacing={1}>
        <Grid item md={8} xs={12}>
          
            <Box sx={{ backgroundColor: "#fff", width: "100%",}}>
                <Box sx={{ backgroundColor: 'neutral.600', py: 1, px:2}}>
                <Typography variant="subtitle1" sx={{ color: '#fff',}}>Exam information</Typography>
                </Box>
              
              <Divider />

              <Box sx={{ py:1, px: 2}}>
              <Grid container spacing={1}>
                <Grid item md={6}>
                  <Box sx={{  display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">MRN</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {order.mrnNumber}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{  display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Name</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {order.name}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{  display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Sex</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: M</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{  display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Procedure</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: CT Forearm</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{  display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Accession No.</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: 2886MB9</Typography>
                    </Grid>
                  </Box>
                </Grid>


                <Grid item md={6}>
                  <Box sx={{  display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Age</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2"> : {format(order.dob, "dd/MM/yyyy")}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{  display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Exam time</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {format(order.createdAt, "dd/MM/yyyy")}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{  display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Location</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {order.location}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{  display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Physician</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {order.physician}</Typography>
                    </Grid>
                  </Box>

                  <Box sx={{  display: "flex" }}>
                    <Grid item md={6} xs={12}>
                      <Typography variant="subtitle3">Facility</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="body2">: {order.modality}</Typography>
                    </Grid>
                  </Box>
                </Grid>
            </Grid>
              </Box>
             
            </Box>
          
        </Grid>
        <Grid item md={4} xs={12}>
          <Box sx={{  height: '100%' }}>
          <Box sx={{ backgroundColor: "#fff", width: "100%", height: '100%' }}>
                <Box sx={{ backgroundColor: 'neutral.600', py: 1, px:2}}>
                <Typography variant="subtitle1" sx={{ color: '#fff',}}>Scan</Typography>
                </Box>
              <Divider />
              <Box sx={{ py:1, px: 2}}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                      

                      <AiIcon sx={{ color: '#fff', height: 42, width: 42 }} />

                      

                  </Box>
              </Box>
            </Box>

          </Box>
        </Grid>
      </Grid>
    </Box>
  </>
);

Order.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Order;
