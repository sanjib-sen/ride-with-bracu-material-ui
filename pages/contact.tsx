import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import Layout from "../components/layout";

function Contact() {
  const [fb, setFb] = useState(false);
  const [phone, setPhone] = useState(false);

  return (
    <Layout>
      <Grid2 padding={2} sm={6}>
        <Stack spacing={3} padding={2}>
          <Typography variant="h3" paddingBottom={3}>
            Select your Contact Medium
          </Typography>
          <Typography paragraph variant="h5">
            Choose the medium that you wanted to be contacted with. Your G-Suite
            email address will be shared by default. Apart from that, You can
            add Facebook or even your Phone Number.
          </Typography>
          <Alert severity="warning">
            Please note that, if you add your Phone Number, everybody will be
            able to see it.
          </Alert>
        </Stack>
      </Grid2>
      <Grid2 sm={3}>
        <Stack spacing={2}>
          {fb ? (
            <Grid2
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid2>
                <TextField
                  size="small"
                  variant="outlined"
                  label="Profile Link"
                  value="https://www.facebook.com/sanjib.kumarsen.963/"
                />
              </Grid2>
              <Grid2>
                <Button color="secondary" variant="contained">
                  Add
                </Button>
              </Grid2>
            </Grid2>
          ) : (
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                setFb(true);
              }}
            >
              Add Facebook
            </Button>
          )}

          {phone ? (
            <Grid2 container spacing={2} justifyContent="center">
              <Grid2>
                <TextField
                  size="small"
                  variant="outlined"
                  label="Phone Number"
                  value="01XXXXXXXXX"
                />
              </Grid2>
              <Grid2>
                <Button color="warning" variant="contained">
                  Add
                </Button>
              </Grid2>
            </Grid2>
          ) : (
            <Button
              color="warning"
              variant="contained"
              onClick={() => {
                setPhone(true);
              }}
            >
              Add Phone No
            </Button>
          )}
        </Stack>
      </Grid2>
      <Grid2 xs={12} padding={2} textAlign="center">
        <Button size="large" color="success" variant="contained">
          Go to the Next Page
        </Button>
      </Grid2>
    </Layout>
  );
}

export default Contact;
