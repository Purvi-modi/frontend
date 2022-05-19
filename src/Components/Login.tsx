import {
  Card,
  Button,
  Grid,
  Typography,
  TextField,
  styled,
  Box,
} from "@mui/material";
import Axios from "axios";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    Axios.post("http://localhost:8000/login", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);

      if (response.data.length === 0) {
        alert("Wrong email/password combination!");
      } else {
        const email = response.data[0]["email"];
        alert("Welcome " + email);
      }
    });
  };

  return (
    <>
      <Box
        sx={{
          //   display: "flex",
          justifyContent: "center",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          //   alignItems: "center",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            //  position: "absolute",
            left: "50%",
            color: "white",
            marginBottom: "20px",
          }}
          fontSize={40}
        >
          <b>Login</b>
        </Typography>

        <Card
          sx={{
            height: "300px",
            width: "400px",
            borderRadius: "6%",
          }}
        >
          <Grid
            container
            sx={{
              marginLeft: "30px",
              marginTop: "30px",
            }}
          >
            <Grid item md={12} xs={12} sx={{ marginTop: "20px" }}>
              <Typography fontSize={15} sx={{ color: "#87CEFA" }}>
                <b>Email</b>
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                size="small"
                id="outlined-basic"
              />
            </Grid>
            <br></br>
            <Grid item md={12} xs={12} sx={{ marginTop: "20px" }}>
              <Typography fontSize={15} sx={{ color: "#87CEFA" }}>
                <b>Password</b>
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                type="password"
                autoComplete="current-password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                size="small"
                id="outlined-basic"
              />
            </Grid>

            <Button
              style={{
                textTransform: "none",
                color: "white",
                background: "#191970",
                marginTop: "30px",
                marginBottom: "20px",
                marginRight: "15px",
                marginLeft: "3%",
                width: "150px",
                borderRadius: 50,
              }}
              size="large"
              onClick={login}
            >
              Login
            </Button>
          </Grid>
        </Card>
      </Box>
    </>
  );
};
