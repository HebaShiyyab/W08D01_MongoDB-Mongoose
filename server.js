const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})