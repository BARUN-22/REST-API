const express = require("express");
const{logReqRes,}=require("./middlewares");

const {connectmongoDb}=require('./connection');





const users = require("./MOCK_DATA.json");

const userRouter=require('./routes/user')
const app = express();
const PORT = 8000;

// Connection
connectmongoDb("mongodb://127.0.0.1:27017/youtube-app-1");

// Schema
// # in user.js
// Model

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

// Routes
app.use("./user",userRouter);
// Start server
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
