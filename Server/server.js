const express = require("express")
const app = express()
require('dotenv').config()
const cors = require("cors");
app.use(cors());
const PORT = process.env.PORT || 5000
const route = require('./routes/route')
const db = require('./config/db')
db()
app.use(express.json());

app.use('/api/v1',route)

app.listen(PORT,()=>{
   console.log(`Server started at Port ${PORT}`)
})