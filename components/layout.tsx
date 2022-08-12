import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";
import { NextPage } from "next/types";
import { Props } from "../types/PageProps";

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid2 container justifyContent="center" alignItems="center">
        {children}
      </Grid2>
    </Box>
  );
};

export default Layout;
