const mongoose =require("mongoose")

const recursosSchema = new mongoose.Schema({
  nombre:{type:String, required:true},
  imagen:{type:String, required:true},
  apps:[{type: mongoose.Types.ObjectId,ref:"apps", required:false}]
},
{
  timestamps:true,
  collection:"recursos"
})

const Recurso = mongoose.model("recursos",recursosSchema, "recursos")
module.exports = Recurso
