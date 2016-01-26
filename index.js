"use strict";

let express = require("express");
let bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());

let snippets = [];

app.get('/', (req, res) => res.send(JSON.stringify(snippets)));

app.post('/', (req, res) => { 
    snippets.push(req.body);
    res.status(201).send('ok');
});

app.listen(3000, function() {
    console.log("Code Store Server is listening on port 3000");
});
