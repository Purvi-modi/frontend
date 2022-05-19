import { Card, Button, Grid, Typography, TextField, Box } from "@mui/material";
import { useState } from "react";
import Axios from "axios";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [emptyEmailMessage, setEmptyEmailMessage] = useState(false);
  const [emptyPasswordMessage, setEmptyPassowordMessage] = useState(false);
  const [PasswordLengthMessage, setPassowordLengthMessage] = useState(false);
  const [emptyConfirmPasswordMessage, setEmptyConfirmPasswordMessage] =
    useState(false);
  const [passowrdsDoNotMatchMessage, setPasswordsDoNotMatchMessage] =
    useState(false);
  const ValidateEmail = (mail: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    // alert("You have entered an invalid email address!");
    return false;
  };

  const register = () => {
    setEmptyEmailMessage(false);
    setInvalidEmail(false);
    setEmptyPassowordMessage(false);
    setPassowordLengthMessage(false);
    setEmptyConfirmPasswordMessage(false);
    setPasswordsDoNotMatchMessage(false);

    console.log(ValidateEmail(email));

    if (ValidateEmail(email) && password.length > 4) {
      Axios.post("http://localhost:8000/register", {
        email: email,
        password: password,
      }).then((response) => {
        alert("User Successfully Registered!");
      });
    } else {
      if (!ValidateEmail(email)) {
        console.log("invalid email");
        setInvalidEmail(true);
      }
      if (email.length === 0) {
        setEmptyEmailMessage(true);
      }
      if (password.length === 0) {
        setEmptyPassowordMessage(true);
      }
      if (password.length > 0 && password.length < 5) {
        setPassowordLengthMessage(true);
      }
      if (confirmPassword.length === 0) {
        setEmptyConfirmPasswordMessage(true);
      }
      if (confirmPassword !== password) {
        setPasswordsDoNotMatchMessage(true);
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          justifyContent: "center",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            left: "50%",
            color: "white",
            marginBottom: "20px",
          }}
          fontSize={40}
        >
          <b>Create Account</b>
        </Typography>

        <Card
          sx={{
            height: "430px",
            width: "400px",
            borderRadius: "6%",
          }}
        >
          <Grid
            container
            sx={{
              marginLeft: "30px",
              marginTop: "5px",
            }}
          >
            <Grid item md={12} xs={12} sx={{ marginTop: "20px" }}>
              <Typography
                fontSize={15}
                sx={{ color: "#87CEFA", marginBottom: "5px" }}
              >
                <b>Email</b>
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                size="small"
                // required
                id="outlined-basic"
                // label="Required"
                error={invalidEmail || emptyEmailMessage ? true : false}
                helperText={
                  emptyEmailMessage
                    ? "This field is required"
                    : invalidEmail
                    ? "Invalid Email Id"
                    : ""
                }
                onChange={(event) => {
                  // setInvalidEmail(false);
                  setEmail(event.target.value);
                }}
              />
            </Grid>
            <br></br>
            <Grid item md={12} xs={12} sx={{ marginTop: "20px" }}>
              <Typography
                fontSize={15}
                sx={{ color: "#87CEFA", marginBottom: "5px" }}
              >
                <b>Password</b>
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                size="small"
                required
                type="password"
                autoComplete="current-password"
                id="outlined-basic"
                // label="Required"
                // autoComplete="current-password"
                error={emptyPasswordMessage || PasswordLengthMessage}
                helperText={
                  emptyPasswordMessage
                    ? "This field is required"
                    : PasswordLengthMessage
                    ? "Password length should be atleast 5"
                    : ""
                }
              />
            </Grid>
            <br></br>
            <Grid
              item
              md={12}
              xs={12}
              sx={{ marginTop: "20px", marginBottom: "5px" }}
            >
              <Typography fontSize={15} sx={{ color: "#87CEFA" }}>
                <b>Confirm Password</b>
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                type="password"
                autoComplete="current-password"
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
                size="small"
                required
                id="outlined-basic"
                // label="Required"
                // defaultValue="Hello World"
                error={
                  emptyConfirmPasswordMessage || passowrdsDoNotMatchMessage
                }
                helperText={
                  emptyConfirmPasswordMessage
                    ? "This field is required"
                    : passowrdsDoNotMatchMessage
                    ? "Passwords don't match"
                    : ""
                }
              />
            </Grid>
            <br></br>
            <Button
              style={{
                textTransform: "none",
                color: "white",
                background: "#191970",
                marginTop: "30px",
                marginBottom: "20px",
                left: "17%",
                width: "200px",
                borderRadius: 50,
              }}
              size="large"
              onClick={register}
            >
              Register
            </Button>
          </Grid>
        </Card>
      </Box>
    </>
  );
};
