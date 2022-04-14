import Head from "next/head";
import React from "react";
import { Box, Container } from "@mui/material";
import { CustomerListResults } from "../../components/order/order-list-results";
import { CustomerListToolbar } from "../../components/order/order-list-toolbar";
import { DashboardLayout } from "../../components/dashboard-layout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled, useTheme } from "@mui/material/styles";
// import Box from '@mui/material/Box';
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Toolbar from "@mui/material/Toolbar";
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

const Orders = (props) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const { orders } = props;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>Orders | Diagnosoft RIS</title>
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
            <CustomerListToolbar />
            <Box sx={{ mt: 3 }}>
              <CustomerListResults orders={orders}
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
              <Typography color="textPrimary" 
              variant="h5">
                Order No: {orders.Inspection_code}
              </Typography>
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
Orders.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Orders;

export async function getServerSideProps() {
  try {
    const orders = await prisma.examinationRequest.findMany({
      orderBy: {
        Inspection_code: "desc",
      },
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
      props: { orders },
    };
  } catch (error) {
    console.log(error);
  }
}
