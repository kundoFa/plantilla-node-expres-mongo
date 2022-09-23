const express = require("express");
const morgan = require("morgan");
const app = express()
const PORT = 7000;
const routes = require("./src/router/routes.js");
const path = require("path")
app.use(morgan("dev"))

app.use(routes)

app.use(express.static(path.join(__dirname,"src/public")))

app.listen(PORT,()=>{
    console.log(`activo en http://localhost:${PORT}`)
})

