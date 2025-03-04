require("dotenv").config()
const express = require('express')
const mongoose = require("mongoose")
const { connectDB } = require("./src/config/db")
const cursosRouter = require("./src/api/routes/cursos")
const plataformasRouter = require("./src/api/routes/plataformas")

const curso = express()

/*mongoose
.connect(process.env.DB_URL)
.then(()=> console.log ("conectado con exito a la bbdd"))
.catch(() => console.log("Error al conectar a la bbdd"))*/
curso.use(express.json())
connectDB()

curso.use("/api/v1/plataformas/", plataformasRouter)
curso.use("/api/v1/cursos/", cursosRouter)


curso.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

curso.listen(3000, () => {
  console.log('Servidor corriendo en: http://localhost:3000 😎')
})
