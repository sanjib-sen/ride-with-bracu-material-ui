import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import { NextPage } from "next/types";
import Layout from "../components/layout";
import { Props } from "../types/PageProps";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import { useFirebaseAuth } from "../firebase/context";

/**
 * TODO: Redirect to Login if not logged in
 * TODO: implement handleEdit (Profile Edit)
 */
const Profile: NextPage<Props> = () => {
  const user = useFirebaseAuth();
  return (
    <Layout>
      <Grid2 xs={12} sm={12} md={6} lg={6} xl={6} padding={2}>
        <Typography variant="h3">
          {user ? user.displayName : "Not Logged In"}
        </Typography>
      </Grid2>
      <Grid2 xs={9} sm={9} md={6} lg={6} xl={6} padding={2}>
        <Stack spacing={1}>
          {" "}
          <Grid2 container justifyItems="center" alignItems="center">
            <Grid2 xs={11} sm={11}>
              <Typography variant="h6">
                Kallyanpur, Dhaka, Bangladesh
              </Typography>
            </Grid2>
            <Grid2 xs={1} sm={1}>
              <Fab size="small" color="primary">
                <EditIcon />
              </Fab>
            </Grid2>
          </Grid2>
          <Grid2 container justifyItems="center" alignItems="center">
            <Grid2 xs={11} sm={11}>
              <Typography variant="h6">Facebook</Typography>
            </Grid2>
            <Grid2 xs={1} sm={1}>
              <Fab size="small" color="primary">
                <EditIcon />
              </Fab>
            </Grid2>
          </Grid2>
          <Grid2 container justifyItems="center" alignItems="center">
            <Grid2 xs={11} sm={11}>
              <Typography variant="h6">+8801706968232</Typography>
            </Grid2>
            <Grid2 xs={1} sm={1}>
              <Fab size="small" color="primary">
                <EditIcon />
              </Fab>
            </Grid2>
          </Grid2>
        </Stack>
      </Grid2>
    </Layout>
  );
};

export default Profile;
