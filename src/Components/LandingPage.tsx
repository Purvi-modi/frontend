import { Button, Card } from "@mui/material";
import { Register } from "./Register";
import background from "../BlueClock.jpg";
import { useState } from "react";
import { Login } from "./Login";

export const LandingPage = () => {
  const [showLoginPage, setShowLoginPage] = useState(false);

  const LoadLoginPage = () => {
    setShowLoginPage(true);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
      }}
    >
      <Button
        style={{
          float: "right",
          marginTop: "15px",
          marginRight: "15px",
          color: "#191970",
          background: "white",
          textTransform: "none",
          borderColor: "transparent",
          borderRadius: 10,
        }}
        variant="outlined"
        size="large"
        onClick={LoadLoginPage}
      >
        <b>Already a User?</b>
      </Button>
      {showLoginPage ? <Login /> : <Register />}
    </div>
  );
};
