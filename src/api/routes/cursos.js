const {getCursos, getCursosById, getCursosByTema, getCursosByPricePro, postCurso, putCurso, deleteCurso} = require("../controllers/cursos")

const cursosRouter = require("express").Router()


cursosRouter.get("/:id", getCursosById)
cursosRouter.get("/tema/:tema", getCursosByTema)
cursosRouter.get("/precio/:precio", getCursosByPricePro)
cursosRouter.put("/:id", putCurso)
cursosRouter.delete("/:id", deleteCurso)
cursosRouter.post("/", postCurso)
cursosRouter.get("/", getCursos)

module.exports = cursosRouter