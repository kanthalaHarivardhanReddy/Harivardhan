
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
    // res.send("Hello, world")
    // res.send(req.query)
    const urls = req.query.url;
    console.log(urls)
    let result = []
    let s = new Set();    

    const func = async function () {
        for(const i in urls){
            const res = await fetch(urls[i]);
            const json = await res.json();
            // result[i] = res.json();
            if(json!=={}){
                console.log(json.numbers)
                const num = json.numbers;
                // console.log(result[i])
                for( const i in num) s.add(num[i])
            }
        }
    }
    func();
    setTimeout(()=>{
        res.send(s)
    },500
    )
})

app.listen(PORT, (req, res)=>{
    console.log(`The express app is listening at http://localhost:${PORT}`);
})