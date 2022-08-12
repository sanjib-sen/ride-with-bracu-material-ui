import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import { NextPage } from "next/types";
import Layout from "../components/layout";
import { Area } from "../types/Area";
import { useState, FormEvent } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const RegisterPage: NextPage = () => {
  var data = require("../data/dhaka.json");
  const [gender, setGender] = useState("");
  const [area, setArea] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      gender: gender,
    });
  };
  const handleGenderSelection = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };

  const handleAreaSelection = (event: SelectChangeEvent) => {
    setArea(event.target.value);
  };

  return (
    <Layout>
      <Grid2 padding={2}>
        <Typography variant="h3">Set up your Profile</Typography>
      </Grid2>
      <Grid2 padding={2}>
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              size="small"
              variant="standard"
              fullWidth
              label="Name"
              value="Sanjib Kumar Sen"
              disabled
            />
            <TextField
              size="small"
              variant="standard"
              fullWidth
              label="Email Address"
              value="sksenonline@gmail.com"
              disabled
            />
            <FormControl>
              <InputLabel>Gender</InputLabel>
              <Select
                id="gender"
                value={gender}
                label="Gender"
                variant="outlined"
                onChange={handleGenderSelection}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Transgender">Transgender</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Area</InputLabel>
              <Select
                id="area"
                value={area}
                label="Area"
                onChange={handleAreaSelection}
              >
                {data.map((area: Area) => {
                  if (area.area_name.en) {
                    return (
                      <MenuItem key={area.id} value={area.area_name.en}>
                        {area.area_name.en}
                      </MenuItem>
                    );
                  }
                })}
              </Select>
            </FormControl>
            <Button type="submit" variant="contained">
              Set Up
            </Button>
          </Stack>
        </Box>
      </Grid2>
    </Layout>
  );
};

export default RegisterPage;
