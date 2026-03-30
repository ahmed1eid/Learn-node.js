const express = require("express")

const app = express()

app.use(express.json());

app.get("/",(req,res) => {
    res.send("main")
})

app.post("/req", (req, res) => {
    res.json({
        url: req.url,
        method: req.method,
        headers:req.headers,
        query: req.query,
        ip: req.ip,
        num1: req.body.num1,
        num2: req.body.num2,
        age: req.query.age
    })
})

app.put("/server",(req,res) => {
    res.send("myserver")
})


app.get("/numbers",(req,res) => {
    let numbers = []
    for(let i =0 ;i <= 100 ; i++ ){
        numbers.push(i)
    }

    res.send(`
        <ul>
         ${numbers.map(num => `<li>${num}</li>`).join('')}
        </ul>
    `)
})

app.delete("/delete",(req,res)=>{
    res.send("delete")
})

app.get("/request_paramiter/getSum/:num1/:num2",(req,res)=>{
    console.log(req.params)
    const n1 = parseInt(req.params.num1);
    const n2 = parseInt(req.params.num2);
    const result = n1 + n2;
    res.send(`The summation is: ${result}`);

})

app.post("/body_paramiter/getSub",(req,res)=>{
    console.log(req.body)
    const n1 = parseInt(req.body.num1);
    const n2 = parseInt(req.body.num2);
    const result = n1 - n2;
    res.send(`The subtration is: ${result}`);

})

app.get("/quary_paramiter/getmulti",(req,res)=>{
    console.log(req.query)
    const n1 = parseInt(req.query.num1);
    const n2 = parseInt(req.query.num2);
    const result = n1 * n2;
    res.send(`The multiplication is: ${result}`);

})

app.get("/quary_paramiter/getdiv",(req,res)=>{
    console.log(req.query)
    const n1 = parseInt(req.query.num1);
    const n2 = parseInt(req.query.num2);
    const result = n1 / n2;
    res.send(`The division is: ${result}`);
});

app.get("/MyPage",(req,res)=>{
    res.render("MyPage.ejs");
});


let port = 80

app.listen(port,() => {
    console.log(`port ${port}`)
})