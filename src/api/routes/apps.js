const {getApps, getAppsById, getAppsByTema, getAppsByPricePro, postApp, putApp, deleteApp} = require("../controllers/apps")

const appsRouter = require("express").Router()


appsRouter.get("/:id", getAppsById)
appsRouter.get("/tema/:tema", getAppsByTema)
appsRouter.get("/precio/:precio", getAppsByPricePro)
appsRouter.put("/:id", putApp)
appsRouter.delete("/:id", deleteApp)
appsRouter.post("/", postApp)
appsRouter.get("/", getApps)

module.exports = appsRouter