require("dotenv").config()
const express = require('express')
const mongoose = require("mongoose")
const { connectDB } = require("./src/config/db")
const appsRouter = require("./src/api/routes/apps")
const recursosRouter = require("./src/api/routes/recursos")

const app = express()

/*mongoose
.connect(process.env.DB_URL)
.then(()=> console.log ("conectado con exito a la bbdd"))
.catch(() => console.log("Error al conectar a la bbdd"))*/
app.use(express.json())
connectDB()

app.use("/api/v1/recursos/", recursosRouter)
app.use("/api/v1/apps/", appsRouter)


app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('Servidor corriendo en: http://localhost:3000 😎')
})
