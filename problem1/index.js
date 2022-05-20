
const express = require('express');
const app = express();;
const fetch = require('node-fetch')
const PORT = 8000;

app.get('/',(req,res)=>{
    // res.send("Hello, world")
    res.send("Home Page")
})

//http://localhost:port/numbers?url=http://localhost:8090/primes&url=http://localhost:8090/fibo&url=http://localhost:8090/odd
app.get('/numbers',(req,res)=>{
    res.send("Hello, world")
    // res.send(req.query)
    const urls = req.query.url;
    console.log(urls)
    let result = []
    for(const url in urls){
        result[url] = fetch(urls[url]).then(res=> res.json()).then(json=> json);
    }
    console.log(result)

})

app.listen(PORT, (req, res)=>{
    console.log(`The express app is listening at http://localhost:${PORT}`);
})