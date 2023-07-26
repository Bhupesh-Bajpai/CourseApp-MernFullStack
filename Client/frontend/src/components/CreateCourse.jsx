import React from "react";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

function CreateCourse() {
    const [title, setTitle] = React.useState("");
    const [imageLink, setImageLink] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [description, setDescription] = React.useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleImageLinkChange = (event) => {
        setImageLink(event.target.value);
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleAddCourse = () => {
        // Add logic to handle the submission of the course data
        fetch("http://localhost:3000/admin/courses", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                imageLink: imageLink,
                price: price,
                description: description
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then((res => {
            res.json().then(data => {
                console.log(data);
                setTitle("");
                setDescription("");
                setImageLink("");
                setPrice("")

            })
        }))
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh"
        }}>
            <Card variant="outlined" style={{
                width: "500px",
                height: "500px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <h2 style={{
                    marginLeft: "100px",
                    alignSelf: "flex-start"
                }}>
                    <Typography>ADD COURSE</Typography>
                </h2>
                <div style={{
                    width: "300px",
                    height: "50px",
                    margin: "10px"
                }}>
                    <TextField
                        fullWidth={true}
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div style={{
                    width: "300px",
                    margin: "10px"
                }}>
                    <TextField
                        fullWidth={true}
                        id="outlined-basic"
                        label="Image Link"
                        variant="outlined"
                        value={imageLink}
                        onChange={handleImageLinkChange}
                    />
                </div>
                <div style={{
                    width: "300px",
                    margin: "10px"
                }}>
                    <TextField
                        fullWidth={true}
                        id="outlined-basic"
                        label="Price"
                        variant="outlined"
                        value={price}
                        onChange={handlePriceChange}
                    />
                </div>
                <div style={{
                    width: "300px",
                    height: "100px", // Adjust the desired height here
                    margin: "10px"
                }}>
                    <TextField
                        fullWidth={true}
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                        value={description}
                        onChange={handleDescriptionChange}
                        multiline={true}
                        rows={4}
                    />
                </div>
                <div style={{
                    width: "300px",
                    margin: "30px"
                }}>
                    <Button fullWidth={true} variant="contained" onClick={handleAddCourse}>ADD COURSE</Button>
                </div>
            </Card>
        </div>
    );
}

export default CreateCourse;
