// All require And Import Modules
const express = require("express");
const mongoose = require('mongoose');
require("dotenv").config()
const auth = require("./app/routers/Auth/Auth")

// Config The App
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())



// Routers Connection 
app.use("/Auth",auth)


mongoose.connect(process.env.Mongodb_URL).then(()=>{
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((e)=>{
    console.log("MongoDB Connection Faild" + e);
})
