const router = require('express').Router();
const controlador = require('./controller')
const authMiddelware = require('../middlewares/auth');


//rutas

router.get('/all', authMiddelware, controlador.traerUsuarios)
router.post('/', authMiddelware,  controlador.traerUnUsuario);
router.post('/login',  controlador.iniciarSesion);
router.post('/create', controlador.crearUnUsuario);
router.put('/update', authMiddelware,  controlador.actualizarUnUsuario);
router.delete('/delete', authMiddelware,  controlador.eliminarUnUsuario);

module.exports = router;