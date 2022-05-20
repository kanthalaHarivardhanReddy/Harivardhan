
const express = require('express');
const app = express();;
const fetch = require('node-fetch')
const PORT = 8000;

app.get('/',(req,res)=>{
    // res.send("Hello, world")
    res.send("Home Page")
})

//http://localhost:port/numbers?url=http://localhost:8090/primes&url=http://localhost:8090/fibo&url=http://localhost:8090/odd

app.get('/numbers', async (req,res)=>{
    // res.send("Hello, world")
    // res.send(req.query)
    const urls = req.query.url;
    // console.log(urls)
       

    const func = async function () {
        let s = new Set(); 
        for(const i in urls){
            const res = await fetch(urls[i]);
            const json = await res.json();
            // result[i] = res.json();
            if(json!=={}){
                console.log(json.numbers)
                const num = json.numbers;
                for( const i in num){
                     s.add(num[i])   
                }
            }
        }
        return s;
    }
    const resultSet = await func();
    const result = [...resultSet];
    result.sort();
    const resultobj = {"numbers":result}
    console.log(resultobj)

    res.send(resultobj)

})

app.listen(PORT, (req, res)=>{
    console.log(`The express app is listening at http://localhost:${PORT}`);
})