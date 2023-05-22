const express = require('express')
const bodyParser = require("body-parser")
const routes = require("./router/routes")

const app = express()


app.get("/", (req, res) => {
    const obj = [{ title: "Rota inicial! Para tratar paciente vá para -> /pacientes" }]
    res.send(obj);
});

const server = app.listen(process.env.PORT || 3002, () => {
    const { port } = server.address();
    console.log(`Server running o port ${port}`);
  });