const express = require("express");
const helmet = require("helmet");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(
  cors({
    methods: "*",
    origin: "*",
  })
);

app.use(helmet());

const PORT = 3030

app.listen(PORT,() =>{
    console.log(`SERVER RUNNING`)
})

app.get("/",(req,res) =>{
    res.json({
        message:"Hello ArgoCd"
    })
})