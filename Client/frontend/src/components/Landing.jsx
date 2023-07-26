
import React from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing() {
    return <div style={{
        display:"flex",
        width:"100vw",
        height:"100vh",
    }}>
        <Card style={{
            width:"100vw",
            padding:"20px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
        }}
        
        >
        <h1>Welcome to course selling website!</h1>
            <div style={{
                 display:"flex",
                 flexDirection:"row",
            }}>
            <Button  sx={{ margin: '0 10px 0 0' }}component={Link} to="/Register" variant="contained" color="primary">
                Register
</Button>
            <Button component={Link} to="/Login" variant="contained" color="primary">
  Login
</Button>
            </div> 
        </Card>
       
       
    </div>
}

export default Landing;