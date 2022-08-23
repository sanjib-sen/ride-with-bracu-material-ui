import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import { NextPage } from "next/types";
import Layout from "../components/layout";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import { useFirebaseAuth } from "../firebase/context";
import { useState } from "react";
import { TextField } from "@mui/material";
import Select from "react-select";
import { SelectProps } from "../types/SelectProps";
import { Area } from "../types/Area";
import HourglassBottomSharpIcon from '@mui/icons-material/HourglassBottomSharp';

/**
 * TODO: Redirect to Login if not logged in
 * TODO: implement handleEdit (Profile Edit)
 */

const Profile: NextPage<any> = ({items}) => {
  const user = useFirebaseAuth();
  const [fb, setFb] = useState(true);
  const [area, setArea] = useState<any>();
  const [phone, setPhone] = useState(false);
  const [address, setAddress] = useState(true);
  console.log(user);
  
  return (
    <Layout>
      <Grid2 xs={12} sm={12} md={6} lg={6} xl={6} padding={2}>
        {user ? (<Typography variant="h3"> {user.displayName} </Typography>) : (<HourglassBottomSharpIcon fontSize="large"/>)}
      </Grid2>
      <Grid2 xs={9} sm={9} md={6} lg={6} xl={6} padding={2}>
        <Stack spacing={1}>
          {address ? (<Grid2 container justifyItems="center" alignItems="center">
            <Grid2 xs={11} sm={11}>
              <Typography variant="h6">
                Kallyanpur, Dhaka, Bangladesh
              </Typography>
            </Grid2>
            <Grid2 xs={1} sm={1}>
              <Fab size="small" color="primary" onClick={()=>{setAddress(false)}}>
                <EditIcon />
              </Fab>
            </Grid2></Grid2>) : (<Grid2 container justifyItems="center" alignItems="center">
              <Grid2 xs={11} sm={11}>
              <Select defaultValue={area} onChange={setArea} options={items} />
              </Grid2>
              <Grid2 xs={1} sm={1}>
                <Fab size="small" color="primary">
                  <CheckIcon />
                </Fab>
              </Grid2>
            </Grid2>
          )}

          {fb?(<Grid2 container justifyItems="center" alignItems="center">
            <Grid2 xs={11} sm={11}>
              <Typography variant="h6">Facebook</Typography>
            </Grid2>
            <Grid2 xs={1} sm={1}>
              <Fab size="small" color="primary" onClick={() => { setFb(false) }}>
                <EditIcon />
              </Fab>
            </Grid2>
          </Grid2>):(<Grid2 container justifyItems="center" alignItems="center">
            <Grid2 xs={11} sm={11}>
              <TextField  size="small"
                  variant="outlined"
                  label="Profile Link"
                  value="https://www.facebook.com/sanjib.kumarsen.963/"/>
            </Grid2>
            <Grid2 xs={1} sm={1}>
              <Fab size="small" color="primary">
              <CheckIcon />
              </Fab>
            </Grid2>
          </Grid2>)}
          {phone?
            (<Grid2 container justifyItems="center" alignItems="center">
              <Grid2 xs={11} sm={11}>
              <TextField  size="small"
                  variant="outlined"
                  label="Phone No"
                  value="01XXXXXXXXX"/>
              </Grid2>
              <Grid2 xs={1} sm={1}>
                <Fab size="small" color="primary">
                  <CheckIcon />
                </Fab>
              </Grid2>
            </Grid2>):(<Grid2 container justifyItems="center" alignItems="center">
              <Grid2 xs={11} sm={11}>
                <Typography variant="h6">+8801706968232</Typography>
              </Grid2>
              <Grid2 xs={1} sm={1}>
                <Fab size="small" color="primary" onClick={() => { setPhone(true) }}>
                  <EditIcon />
                </Fab>
              </Grid2>
            </Grid2>)}
        </Stack>
      </Grid2>
    </Layout>
  );
};


export function getStaticProps() {
  var data = require("../data/dhaka.json");
  var items: SelectProps[] = [];
  data.map((area: Area) => {
    if (area.area_name.en) {
      items.push({ label: area.area_name.en, value: area.id });
    }
  });

  return {
    props: {
      items,
    },
  };
}


export default Profile;
