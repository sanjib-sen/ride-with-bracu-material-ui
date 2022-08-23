import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import Layout from "../components/layout";
import { Area } from "../types/Area";
import { useState } from "react";
import Button from "@mui/material/Button";
import Select from "react-select";
import { SelectProps } from "../types/SelectProps";
import { useFirebaseAuth } from "../firebase/context";
import { WriteUserData } from "../firebase/setProfile";
import { convertEmail } from "../utils/emailToUsername";
import { Profile } from "../types/Profile";

function RegisterPage({ items }: any) {
  const [area, setArea] = useState<any>();
  const [gender, setGender] = useState<any>();
  const user = useFirebaseAuth();
  const genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "transgender", label: "Transgender" },
  ];

  const handleSubmit = () => {
    if (gender && area && user.email && user.displayName && user.uid) {
      console.log(user);
      const profile: Profile = {
        uid:user.uid,
        username: convertEmail(user.email),
        email: user.email,
        name: user.displayName,
        image: user.photoURL,
        gender: gender,
        area: area,
      };
      console.log(profile);
      WriteUserData(profile);
    }
  };
  /**
   *  TODO: Handle Submit
   *
   */

  return (
    <Layout>
      <Grid2 padding={2}>
        <Typography variant="h3">Set up your Profile</Typography>
      </Grid2>
      <Grid2 padding={2}>
          <Stack spacing={3}>
            <TextField
              size="small"
              variant="standard"
              fullWidth
              value={user?user.displayName:""}
              disabled
            />
            <TextField
              size="small"
              variant="standard"
              fullWidth
              value={user?user.email:""}
              disabled
            />
            <Select
              defaultValue={gender}
              options={genders}
              onChange={(e)=>{setGender(e.label)}}
              instanceId="long-value-select"
            />
            <Select defaultValue={area} instanceId="long-value-select" onChange={(e)=>{setArea(e.label)}} options={items} />
            <Button variant="contained" onClick={handleSubmit}>
              Set Up
            </Button>
          </Stack>
      </Grid2>
    </Layout>
  );
}

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

export default RegisterPage;
