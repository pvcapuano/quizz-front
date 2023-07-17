import React, { Suspense } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const LoginForm = React.lazy(() => import("../LoginForm"));

const Login = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={1}>
        <Card>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ my: 2 }}>
              AWS Quizz
            </Typography>
            <Box
              sx={{
                "& .MuiTextField-root": {
                  margin: 1,
                  width: "90%",
                },
              }}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <LoginForm />
              </Suspense>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
