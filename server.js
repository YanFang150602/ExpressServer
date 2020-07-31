const express = require('express');
const path = require('path');
const { readData } = require('./js/readJSON.js');

const app = express();

/*
    允许跨域
*/
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use('/static',express.static(path.join(__dirname,'static')));

app.use('/express',(req, resp) => {
   resp.send('Hello Express!');
});

app.use('/',(req, resp) => {
        resp.format({
            'application/json': () => {
                if(req.url != '/favicon.ico') {
                    const data = readData(req.url);
                    resp.json(data);
                }
            }
        });
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});
