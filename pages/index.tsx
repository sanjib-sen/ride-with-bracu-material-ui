import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";
import type { NextPage } from "next";
import { PropsWithChildren } from "react";
const Home: NextPage = (props: PropsWithChildren) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    ></Box>
  );
};

export default Home;
