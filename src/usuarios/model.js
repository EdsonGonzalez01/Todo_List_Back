const {Schema, model }=require('mongoose');

const schema=new Schema
(
    {
        correo: {
            type:String
        },
        password: {
            type:String
        }

    }
);

module.exports = model('usuarios', schema)