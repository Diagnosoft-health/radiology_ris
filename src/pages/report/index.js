import Head from "next/head";
import React from "react";
import { Box, Container } from "@mui/material";

import { DashboardLayout } from "../../components/dashboard-layout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled, useTheme } from "@mui/material/styles";
// import Box from '@mui/material/Box';
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";

import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { OrderDetails } from "src/components/order/order-details";
// import { orders } from "src/__mocks__/orders";
import prisma from "src/utils/prisma";
import { ReportListToolbar } from "../../components/report/order-list-toolbar";
import { ReportListResults } from "src/components/report/report-list-results";



// export const getStaticProps = async () => {
//   return {
//     props: {
//       orders: orders
//     }
//   }
// }

const drawerWidth = 380;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0.5),
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginRight: -drawerWidth,
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width "], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const Reports = (props) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const { reports } = props;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton> */}

        <Main open={open}>
          <Container maxWidth={false}>
            <ReportListToolbar />
            <Box sx={{ mt: 3 }}>
              <ReportListResults orders={reports}
               handleDrawerOpen={handleDrawerOpen} />
            </Box>
          </Container>
        </Main>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              marginTop: 8.1,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              
              <IconButton onClick={handleDrawerClose}>
                <CloseIcon />

                {/* {theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
              </IconButton>
            </Box>
          </DrawerHeader>
          <Divider />
          <OrderDetails />
        </Drawer>
      </Box>
    </>
  );
};
Reports.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Reports;

export async function getServerSideProps() {
  try {
    const reports = await prisma.examinationRequest.findMany({
     where: { uploaded: true },
      
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
