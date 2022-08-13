import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import Layout from "../components/layout";
import { NextPage } from "next/types";
import { uiConfig, auth } from "../firebase/config";
import { useFirebaseAuth } from "../firebase/context";

const SignInScreen: NextPage<any> = () => {
  const user = useFirebaseAuth();
  console.log(user);
  if (!user) {
    return (
      <Layout>
        <Grid2 padding={2}>
          <Typography variant="h3">Ride with BRACUians</Typography>
        </Grid2>
        <Grid2 padding={2}>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </Grid2>
      </Layout>
    );
  }
  return (
    /**
     * TODO: Redirect HomePage
     */
    <div>
      <h1>My App</h1>
      <p>Welcome {auth.currentUser?.displayName}! You are now signed-in!</p>
      <a onClick={() => auth.signOut()}>Sign-out</a>
    </div>
  );
};

export default SignInScreen;
