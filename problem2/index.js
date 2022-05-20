
const express = require('express');
const app = express();
const PORT = 8000;
const data = ['bonfire', 'cardio', 'case', 'character', 'bonsai'];
const prefix = ['bonf', 'car', 'cas', 'ch', 'bons'];


app.get('/',(req,res)=>{
    // res.send("Hello, world")
    res.send("Home Page")
})

//http://localhost:port/prefixes?keywords=bonfire,bonsai
//[
//     {
//         "keyword": "bonfire",
//         "status": "found",
//         "prefix": "bonf"
//     },
//     {
//         "keyword": "bool",
//         "status": "not_found",
//         "prefix": "not_applicable"
//     }
// ]
app.get('/prefixes',(req,res)=>{
    const keywords = req.query.keywords;
    const result = {}
    const resarr = []
    console.log(keywords)
    // for(const key in keywords){
    //     resarr[key] = data.filter((d)=> {
    //         return (d===keywords[key])?console.log(d):null
    //     })
    // }
    keywords.filter((key)=>{
        for(const d in data){
            if(data[d]===key)
                return data[d]
        }
        return null;
    }
    )
    console.log(resarr)
    res.send(resarr)
})

app.listen(PORT, (req, res)=>{
    console.log(`The express app is listening at http://localhost:${PORT}`);
})