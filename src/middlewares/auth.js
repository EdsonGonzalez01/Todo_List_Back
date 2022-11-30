require('dotenv').config();

function authMiddelware(req, res, next){
    const token = req.headers.token;
    console.log("token: " + token)
    const jwt = require('jsonwebtoken');  
    try {
        var verify = jwt.verify(token, process.env.SECRET); ////verify el token (verify)
        console.log("verify");
        console.log(verify);
        //Extraer id de el usuario (decode)
        const decoded = jwt.decode(token)
        console.log("decoded");
        console.log(decoded);
            //Poner id en el request
        req.id = decoded.id;
        res.status(200);
        next();
    } 
    catch(err) { ////Regresar 401
        // err
        console.log(err)
        res.status(401).send("Usuario no autenticado");
    }
}
module.exports = authMiddelware;