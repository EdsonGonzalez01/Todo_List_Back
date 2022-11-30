const { ObjectId } = require("mongodb");
const { Schema, model } = require ("mongoose")

const schema=new Schema({
    color: {
        type:String
    },
    descripcion: {
        type:String
    },
    activo: {
      type:Boolean  
    },
    usuario:{
        type:ObjectId
    }
});

module.exports = model('Categorias', schema);