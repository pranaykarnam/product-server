

const express = require("express")

const app = express()

app.get("/products" , (req, res)=> {
    res.send("Hello")
})

app.get("/users" , (req, res)=> {
    res.send("Byee")
})


app.listen(3000, ()=>{
    console.log("listening to the port")
})