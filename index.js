require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT ||  3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const myInfo ={
    name:"Gulshan Kathare",
    age:25,
    qulification:"B.E",
    skills:["MERN Stck","Nodejs","ReactJs"]
}

app.get("/info",(req,res) => {
     res.json({message:"Your info",Data:myInfo})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})













