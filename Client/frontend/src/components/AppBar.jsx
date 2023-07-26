import React, { useEffect, useState } from 'react';
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function AppBar() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).then(res => {
      res.json().then(data => {
        if (data.username) {
          setUserEmail(data.username);
        }
      });
    });
  }, []);

  const handleSignOut = () => {
    localStorage.setItem("token", null);
    setUserEmail(null);
  };

  if (userEmail) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "100%",
          minHeight: "5%",
          flexWrap:"wrap"
        }}
      >
        <div style={{ marginTop: "4px" }}>
          <Typography>Course Launcher</Typography>
        </div>
        <div
          style={{
            marginTop: "4px",
            width: "22%",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <div
            style={{
              marginRight: "20px",
              width: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {userEmail}
          </div>
          <Button
            style={{ width: "30%" }}
            size="small"
            variant="contained"
            color="primary"
            onClick={handleSignOut}
          >
            SIGN OUT
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "5%"
      }}
    >
      <div style={{ marginTop: "4px" }}>
        <Typography>Course Launcher</Typography>
      </div>
      <div style={{ marginTop: "4px" }}>
        <Button
          sx={{ margin: '0 10px 0 0' }}
          size="small"
          component={Link}
          to="/Register"
          variant="contained"
          color="primary"
        >
          SIGN UP
        </Button>
        <Button
          component={Link}
          size="small"
          to="/Login"
          variant="contained"
          color="primary"
        >
          SIGN IN
        </Button>
      </div>
    </div>
  );
}

export default AppBar;
