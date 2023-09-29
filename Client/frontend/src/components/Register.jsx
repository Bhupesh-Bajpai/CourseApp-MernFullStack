import React from "react";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Alert } from "@mui/material";
import { margin } from "@mui/system";
import './Register.css'
import axios from 'axios'
/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [registrationFlag,setRegistration] = React.useState("");
    const [selectedRole, setSelectedRole] = React.useState('admin');



    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    }

     const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };



    const registerAdmin = async () =>{
        if(selectedRole==="admin"){
            // fetch("http://localhost:3000/admin/signup",{
            //     method:"POST",
            //     body:JSON.stringify({
            //         username:email,
            //         password:password
            //     }),
            //     headers:{
            //         "Content-Type": "application/json"
            //     }
            // }).then((res=>{
            //     res.json().then(data=>{
            //         console.log(data);
            //         localStorage.setItem("token",data.token);
            //         setRegistration("true");
            //         setEmail("");
            //         setPassword("")
            //     })
            // }))


            const response = await axios.post("http://localhost:3000/admin/signup",{
                username:email,
                password:password
            })

            let data = response.data;
            localStorage.setItem("token",data.token);
            setRegistration("true");
            setEmail("");
            setPassword("")


        }else{
            // fetch("http://localhost:3000/users/signup",{
            //     method:"POST",
            //     body:JSON.stringify({
            //         username:email,
            //         password:password
            //     }),
            //     headers:{
            //         "Content-Type": "application/json"
            //     }
            // }).then((res=>{
            //     res.json().then(data=>{
            //         console.log(data);
            //         localStorage.setItem("token",data.token);
            //         setRegistration("true");
            //         setEmail("");
            //         setPassword("")
            //     })
            // }))
            const response = await axios.post("http://localhost:3000/users/signup",{
                username:email,
                password:password
            })
            let data = response.data;
            localStorage.setItem("token",data.token);
            setRegistration("true");
            setEmail("");
            setPassword("")
        }
   
    }

    return <div>
           {registrationFlag==="true" &&(
             <Alert style={{
                zIndex :"10",
                width:"100%"
             }} variant="filled" severity="success">
                Sign up Succesfull.
             </Alert>
        )}
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            width:"100vw",
            height:"100vh"
    
    
    }}>
          <div className="container">
      <label htmlFor="user-role">Select Role:</label>
      <select id="user-role" value={selectedRole} onChange={handleRoleChange}>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
    </div>
        <Card variant="outlined" style={{
            width:"500px",
            padding:"20px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
        }}>
        <h3>Welcome our course site.Please register From here</h3>
     
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
    
        <Button fullWidth={true} variant="contained" onClick={registerAdmin}>SIGN UP</Button> 

        </div>
       
        
       
        </Card>
       
       
      
 
        </div>

    
    </div>
}

export default Register;