const Curso = require("../models/cursos")

const getPlataformas = async (req, res, next) => {
  try {
    const cursos = await Plataforma.find();
    return res.status(200).json(cursos)
  } catch (error) {
    return res.status(400).json("Error en get") 
  }
}

const getPlataformasById = async (req, res, next) => {
  try {
    const {id }= req.params
    const app = await Plataforma.findById(id)
    return res.status(200).json(app)
    
  } catch (error) {
    return res.status(400).json("Error en getByID")
    
  }
}
const getPlataformasByTema = async (req, res, next) => {
  try {
    const { tema }= req.params
    const cursos = await Plataforma.find({tema: tema})
    return res.status(200).json(cursos)
  } catch (error) {
    return res.status(400).json("Error en getByTema")
    
  }
}
const getPlataformasByPricePro = async (req, res, next) => {
  try {
    const { precioPro }= req.params
    const cursos = await Plataforma.find({precioPro: {$lt: precioPro}})
    return res.status(200).json(cursos)
    
  } catch (error) {
    return res.status(400).json("Error en getByPricePro")
    
  }
}
const postPlataforma = async (req, res, next) => {
  try {
    console.log(req.body)
    const newPlataforma = new Plataforma(req.body)
    const appSaved = await newPlataforma.save()
    return res.status(201).json(appSaved)
    
  } catch (error) {
    return res.status(400).json("Error en post")
    
  }
}
const putPlataforma = async (req, res, next) => {
  try {
    const { id }= req.params
    const newPlataforma = new Plataforma(req.body)
    newPlataforma._id = id
    const appUpdated = await Plataforma.findByIdAndUpdate(id, newPlataforma, {new: true})
    return res.status(200).json(appUpdated)

  } catch (error) {
    return res.status(400).json("Error en put")
  }
}
const deletePlataforma = async (req, res, next) => {
  try {
    const {id }= req.params
    const appDeleted = await Plataforma.findByIdAndDelete(id)
    return res.status(200).json(appDeleted)
  } catch (error) { 
    return res.status(400).json("Error en delete")
    
  }
}
module.exports = {
  getPlataformas,
  getPlataformasById,
  getPlataformasByTema,
  getPlataformasByPricePro,
  postPlataforma,
  putPlataforma,
  deletePlataforma
}