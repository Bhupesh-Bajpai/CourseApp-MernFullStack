import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";

function Courses(){
    const [courses,setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/admin/courses", {
          method: "GET",
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        }).then(res => {
          res.json().then(data => {
          setCourses(data.courses);
          });
        });
      }, []);
return(
    <div>
        <h1 style={{textAlign:"center",fontSize:"25px",fontFamily: 'Georgia',}}>Course Catalog</h1>
        <div style={{textAlign:"center",fontSize:"15px",fontFamily:"Verdana"}} >
            <p>Interactive LIVE & Self-Paced Courses with Individual Attention by Industry Leading Gurus to 
                Encourage Out-of-the-box thinking, leading to Clarity in Concepts, Creativity and Innovative Ideas.</p>
        </div>
        <div style={{
            display : "flex",
            flexDirection: "row",
            flexWrap:"wrap",
            justifyContent:"center",
            alignItems:"center"
            
        }}>
        {courses.map(course => (
        <Course course={course} key={course._id} />
      ))}
        </div>

     
    </div>
)

function Course(props){
    return <Card
    style={{
        height:"300px",
        width:"300px",
        border:"1px solid black",
        margin:"10px"
    }}
    >
       <div style={{
        display:"flex",
        flexDirection:"column",
        width:"100%",
        height:"100%"
       }}>
        <div style={{
            height:"20%",
            textAlign:"center",
            fontSize:"18px",
            fontFamily: 'Sofia Pro',
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>{props.course.title}</div>
        <div style={{
            height:"25%",
            fontSize:"10px",
            fontFamily: 'Helvetica',
        }}>{props.course.description}</div>
        <div style={{width:"100%",height:"40%"}}><img style={{width:"100%",height:"100%"}} src={props.course.imageLink} alt="" /></div>
        <div style={{
            height:"15%",
            fontSize:"20px",
            fontFamily: 'Georgia',
            textAlign:"center"
        }}>{props.course.price}</div>
       </div>
    </Card>
}
}

export default Courses;