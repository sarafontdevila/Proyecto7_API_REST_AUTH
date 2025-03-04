const {getPlataformas, getPlataformasById, postPlataforma, putPlataforma, deletePlataforma} = require("../controllers/plataformas")

const plataformasRouter = require("express").Router()


plataformasRouter.get("/:id", getPlataformasById)
plataformasRouter.put("/:id", putPlataforma)
plataformasRouter.delete("/:id", deletePlataforma)
plataformasRouter.post("/", postPlataforma)
plataformasRouter.get("/", getPlataformas)

module.exports = plataformasRouter