const express = require("express")

const app = express()

app.get("/",(req,res) => {
    res.send("main")
})

app.post("/req", (req, res) => {
    res.json({
        url: "req.url",
        method: "req.method",
        headers: 'req.headers',
        query: "req.query",
        ip: "req.ip",
    })
})

app.put("/server",(req,res) => {
    res.send("myserver")
})

let numders = []
app.get("/numders",(req,res) => {

    for(let i =0 ;i <= 100 ; i++ ){
        numders = [...numders,i]
    }

    res.send(numders)
})

app.delete("/delete",(req,res)=>{
    res.send("delete")
})

app.delete("/delete",(req,res)=>{
    res.send("delete")
})

let port = 80

app.listen(port,() => {
    console.log(`port ${port}`)
})