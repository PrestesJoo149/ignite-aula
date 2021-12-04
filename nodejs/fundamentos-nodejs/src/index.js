const { response } = require('express');
const express = require('express');

const app = express();

app.get("/", (request, response) => {
    return response.json({mensagem: "Hello word 🐋"})
})

app.listen(3333);
