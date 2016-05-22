var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var commentController = require('../controllers/comment_controller');
var userController = require('../controllers/user_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//Autoload de rutas que usen quizId
router.param('quizId', quizController.load);  // autoload : quizId
router.param('userId', userController.load);	// autoload : userId




// Definición de rutas de /quizzes
router.get('/quizzes',                     quizController.index);
router.get('/quizzes/:quizId(\\d+)',       quizController.show);
router.get('/quizzes/:quizId(\\d+)/check', quizController.check);
router.get('/quizzes/new',                 quizController.new);
router.post('/quizzes',					   quizController.create);
router.get('/quizzes/:quizId(\\d+)/edit',  quizController.edit);
router.put('/quizzes/:quizId(\\d+)', 	   quizController.update);
router.delete('/quizzes/:quizId(\\d+)',    quizController.destroy);


router.get('/quizzes/:quizId(\\d+)/comments/new', commentController.new);
router.post('/quizzes/:quizId(\\d+)/comments', commentController.create);

//Definicion de la ruta de la pag autor
router.get('/autor',   						 quizController.autor);

// Definición de rutas de cuenta
router.get('/users',                     userController.index); // listado usuarios
router.get('/users/:userId(\\d+)',       userController.show); // veer un usuario
router.get('/users/new',      			 userController.new);  //formulario sing in
router.post('/users',      				 userController.create); // registrar nuevo usuario
router.get('/users/:userId(\\d+)/edit',	 userController.edit);  // editar cuenta
router.put('/users/:userId(\\d+)',       userController.update); // actualizar cuenta
router.delete('/users/:userId(\\d+)',    userController.destroy); // borrar cuenta


module.exports = router;