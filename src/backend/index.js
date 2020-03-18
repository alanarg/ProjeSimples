const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.get('/', (req,res)=>{
    res.send('heloo')
})

app.listen(3000)