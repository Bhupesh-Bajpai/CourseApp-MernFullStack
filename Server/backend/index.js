const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors")

const adminRouter = require('../backend/routes/admin');
const userRouter = require('../backend/routes/user');

app.use(express.json());
app.use(cors())

// connect with user routes
app.use("/admin",adminRouter);
app.use('/user',userRouter)

// Connect to MongoDB
mongoose.connect('mongodb+srv://bajpaibhupesh25:Bhupesh2502@cluster0.rrzvaih.mongodb.net/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });






app.listen(3000, () => console.log('Server running on port 3000'));
