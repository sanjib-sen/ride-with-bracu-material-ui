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
import Select from "react-select";

const RegisterPage: NextPage<any> = ({ items }) => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "transgender", label: "Transgender" },
  ];
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      gender: selectedGender,
    });
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
            <Select  options={genders} onChange={setSelectedGender} />
            <Select onChange={setSelectedArea} options={items} />
            <Button type="submit" variant="contained">
              Set Up
            </Button>
          </Stack>
        </Box>
      </Grid2>
    </Layout>
  );
};

export function getStaticProps() {
  var data = require("../data/dhaka.json");
  var items: any = [];
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
