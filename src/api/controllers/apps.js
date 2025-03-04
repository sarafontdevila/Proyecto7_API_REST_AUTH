const App = require("../models/apps")

const getApps = async (req, res, next) => {
  try {
    const apps = await App.find();
    return res.status(200).json(apps)
  } catch (error) {
    return res.status(400).json("Error en get") 
  }
}

const getAppsById = async (req, res, next) => {
  try {
    const {id }= req.params
    const app = await App.findById(id)
    return res.status(200).json(app)
    
  } catch (error) {
    return res.status(400).json("Error en getByID")
    
  }
}
const getAppsByTema = async (req, res, next) => {
  try {
    const { tema }= req.params
    const apps = await App.find({tema: tema})
    return res.status(200).json(apps)
  } catch (error) {
    return res.status(400).json("Error en getByTema")
    
  }
}
const getAppsByPricePro = async (req, res, next) => {
  try {
    const { precioPro }= req.params
    const apps = await App.find({precioPro: {$lt: precioPro}})
    return res.status(200).json(apps)
    
  } catch (error) {
    return res.status(400).json("Error en getByPricePro")
    
  }
}
const postApp = async (req, res, next) => {
  try {
    console.log(req.body)
    const newApp = new App(req.body)
    const appSaved = await newApp.save()
    return res.status(201).json(appSaved)
    
  } catch (error) {
    return res.status(400).json("Error en post")
    
  }
}
const putApp = async (req, res, next) => {
  try {
    const { id }= req.params
    const newApp = new App(req.body)
    newApp._id = id
    const appUpdated = await App.findByIdAndUpdate(id, newApp, {new: true})
    return res.status(200).json(appUpdated)

  } catch (error) {
    return res.status(400).json("Error en put")
  }
}
const deleteApp = async (req, res, next) => {
  try {
    const {id }= req.params
    const appDeleted = await App.findByIdAndDelete(id)
    return res.status(200).json(appDeleted)
  } catch (error) { 
    return res.status(400).json("Error en delete")
    
  }
}
module.exports = {
  getApps,
  getAppsById,
  getAppsByTema,
  getAppsByPricePro,
  postApp,
  putApp,
  deleteApp
}