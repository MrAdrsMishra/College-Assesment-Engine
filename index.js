require('dotenv').config()
const express = require('express')
const app = express()
const port = 6000

app.get('/',(req,res)=>{
    res.send('hello adarsh welcome to home')
})
app.get('/login',(req,res)=>{
    res.send('<h1>hello adarsh login</h1>')
})
app.get('/hey',(req,res)=>{
    res.send('hello adarsh hey')
})
app.listen(process.env.PORT, ()=>{
    console.log(`hello adarsh ${process.env.PORT}`)
})