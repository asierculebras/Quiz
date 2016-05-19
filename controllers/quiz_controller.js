var models = require('../models');

// GET /question
exports.question = function(req, res, next) {
	models
	.Quiz
	.findOne() //busca la primera pregunta
	.then(function(quiz){
		if (qui) {
		var answer = req.query.answer || '';
		res.render('quizzes/question', {question: 'Capital de Italia',
								    answer: answer});
	}
	else{
		throw new Error ('No hay preguntas en la BBDD');
	}
	}).catch(function(error) {next(error);});
};

// GET /check
exports.check = function(req, res, next) {
	models
	.Quiz
	.findOne() //busca la primera pregunta
	.then(function(quiz){
		if (qui) {
			var answer = req.query.answer || "";
			var result = answer === 'Roma' ? 'Correcta' : 'Incorrecta';
			res.render('quizzes/result', { result: result, 
									   answer: answer });
		}
	else{
		throw new Error ('No hay preguntas en la BBDD');
	}
	}).catch(function(error) {next(error);});
};

exports.autor = function(req, res, next) {

	res.render('quizzes/autor', {});
};