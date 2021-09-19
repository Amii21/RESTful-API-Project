const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
require("../src/db/conn");
const MensRanking = require("../src/models/mens");
const router = require("../src/routers/men");

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Connection Is Live At Port No. ${port}`);
})