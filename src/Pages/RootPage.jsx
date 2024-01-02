import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { Box } from "@mui/joy";
import { Outlet } from "react-router-dom";
export default function Root() {
  const user = {
    displayName: "RITIKA",
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Header />
      <Sidebar></Sidebar>
      <Box
        component="main"
        sx={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          overflow: "hidden",

          height: { lg: user ? "95vh" : "100vh" },
          mt: { sm: user ? 8 : 0, xs: user ? 8 : 0, lg: 0 },
        }}
      >
        <Outlet />

        {/* <RouterProvider router={router[0]} /> */}
      </Box>
    </Box>
  );
}
