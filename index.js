const express = require('express');
const cors = require('cors');
const message= require('./route/route');
const app = express();
require('dotenv').config()

app.use(express.json());
app.use(cors());

app.use('/api' , message);

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`);
})


  
