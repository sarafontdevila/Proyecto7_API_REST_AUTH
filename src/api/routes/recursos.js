const {getRecursos, getRecursosById, postRecurso, putRecurso, deleteRecurso} = require("../controllers/recursos")

const recursosRouter = require("express").Router()


recursosRouter.get("/:id", getRecursosById)
recursosRouter.put("/:id", putRecurso)
recursosRouter.delete("/:id", deleteRecurso)
recursosRouter.post("/", postRecurso)
recursosRouter.get("/", getRecursos)

module.exports = recursosRouter