const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { json } = require("express");
app.use(bodyParser.json());
// const msg = msg;
app.get("/", (req, res) => {
    res.json(`{msg: I am Homepage}`);
});
app.get("/about", (req, res) => {
    res.json(`{msg: I am About Page}`);
});
app.get("/contact", (req, res) => {
    res.json(`{Email: support@pwskills.com}`);
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server Running at ${port}`)
});