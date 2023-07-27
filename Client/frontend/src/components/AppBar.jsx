import React, { useEffect, useState } from 'react';
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function AppBar() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    // Check for an authentication token in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData(token);
    }
  }, []); // Empty dependency array to run this effect only once on initial mount

  const fetchUserData = (token) => {
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token
      }
    })
      .then(res => {
        if (!res.ok) {
          // Handle errors (e.g., token expired or invalid)
          throw new Error("Unable to fetch user data");
        }
        return res.json();
      })
      .then(data => {
        if (data.username) {
          setUserEmail(data.username);
        } else {
          // Handle unexpected data format if necessary
        }
      })
      .catch(error => {
        // Handle errors here (e.g., token expired or invalid)
        // You can redirect to the login page or show an error message
        console.error(error);
        // Clear the token from localStorage to signify non-authentication
        localStorage.removeItem("token");
        setUserEmail(null);
      });
  };

  const handleSignOut = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    // Clear the user email state
    setUserEmail(null);
  };

  if (userEmail) {
    // User is authenticated
    return (
      <div style={{ display: "flex", justifyContent: "space-between", minWidth: "100%", minHeight: "5%" }}>
        <div style={{ marginTop: "4px" }}>
          <Typography>Course Launcher</Typography>
        </div>
        <div style={{ marginTop: "4px", width: "22%", display: "flex", flexDirection: "row" }}>
          <div style={{ marginRight: "20px", width: "70%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {userEmail}
          </div>
          <Button style={{ width: "30%" }} size="small" variant="contained" color="primary" onClick={handleSignOut}>
            SIGN OUT
          </Button>
        </div>
      </div>
    );
  }

  // User is not authenticated
  return (
    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "5%" }}>
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
        <Button component={Link} size="small" to="/Login" variant="contained" color="primary">
          SIGN IN
        </Button>
      </div>
    </div>
  );
}

export default AppBar;
