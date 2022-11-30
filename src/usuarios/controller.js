
const modeloController = require('./model')
function traerUsuarios(req, res){
    const activos = req.query.activos;
    const boolActivos = activos === "true" ? true : false;
    
    if (boolActivos){
        res.send("solo usuarios activos")
    }
    else{
        res.send('todos los usuarios')
    }
}

function traerUnUsuario(req, res){
    //Traer por id
}


function iniciarSesion(req, res) {
    const jwt = require('jsonwebtoken');
    require('dotenv').config();
    const correo = req.body.correo;
    const password = req.body.password;
    

    console.log(correo);
    console.log(password);

    const obj = {
        correo : correo,
        password : password
    }

    modeloController.findOne(obj).then(user =>{
        if(user){
            //Crear Token
            var token = jwt.sign({id : user._id, correo: user.correo}, process.env.SECRET);
            console.log("Token Generado BE:"+ token);
            //Decode , Validate
            res.status(200).send({token});
        }else{
            res.status(401).send("Usuario no encontrado");
        }
    }
    ).catch(err=>{
        res.send("Error:" + err);
    });
}

function crearUnUsuario(req, res){
    const correo = req.body.correo;
    const password = req.body.password;

    const obj = {
        correo : correo,
        password : password,
    }
    
    modeloController.create(obj).then(response =>{
        res.send(response);
    }
    ).catch(err=>{
        res.send("Error:" + err);
    });
}

function actualizarUnUsuario(req, res){
    const correo = req.body.correo;
    const password = req.body.password;
    res.send('Actualizando usuario ' + " " + correo + " " + password);
}

function eliminarUnUsuario(req, res){
    const id = req.body.id;
    res.send('Borrando usuario ' + id)
}

module.exports = {
    traerUnUsuario,
    traerUsuarios,
    crearUnUsuario,
    actualizarUnUsuario,
    eliminarUnUsuario,
    iniciarSesion
}
