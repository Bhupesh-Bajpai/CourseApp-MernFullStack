import React from "react";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import AppBar from "./AppBar";
import { Typography } from "@mui/material";
/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");



    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    }


    const signInAdmin = () =>{
        fetch("http://localhost:3000/admin/login",{
            method:"POST",
            body:JSON.stringify({
                username:email,
                password:password
            }),
            headers:{
                "Content-Type": "application/json"
            }
        }).then((res=>{
            res.json().then(data=>{
                console.log(data);
                localStorage.setItem("token",data.token)
            })
        }))
    }

    return <div>
      <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            width:"100vw",
            height:"100vh"
    
    
    }}>
        <Card variant="outlined" style={{
            width:"500px",
            padding:"20px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
        }}>
        <h3 style={{
            marginLeft:"100px",
            alignSelf:"flex-start"
        }}>
            <Typography >SIGN IN</Typography>
        </h3>
        <div style={{
            width:"300px",
            height:"50px",
            margin:"10px"
        }}>
            <TextField 
            fullWidth={true}
             id="outlined-basic" 
             label="Email" 
             variant="outlined" 
             onChange={handleEmailChange}
             />

        </div>
        <div style={{
            width:"300px",
            height:"50px",
            margin:"10px"
        }}>
        <TextField 
        fullWidth={true} 
        id="outlined-basic" 
        label="password" 
        variant="outlined" 
        onChange={handlePasswordChange}
        />
       

        </div>
        <div style={{
            width:"300px",
            margin:"10px"
        }}>
    
        <Button fullWidth={true} variant="contained" onClick={signInAdmin}>SIGN IN</Button> 

        </div>
       
        
       
        </Card>

      
 
        </div>

    
    </div>
}

export default Login;