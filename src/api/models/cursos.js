const mongoose =require("mongoose")

const cursoSchema = new mongoose.Schema({
  nombre:{type:String, required:true},
  imagen:{type:String, required:true},
  versionGratis:{type:String, required:true},
  precioPro:{type:Number, required:true},
  tema:{type:String, required:true, 
    enum:
    [ "marketing",
      "finanzas", 
      "tecnologia",
    ]
      },
},
{
  timestamps:true,
  collection:"cursos"
})

const Plataforma = mongoose.model("cursos",cursoSchema, "cursos")
module.exports = Plataforma
