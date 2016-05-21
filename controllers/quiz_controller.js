var models = require('../models');
//Autoload el quiz asociado a :quizId
exports.load = function(req, res, next, quizId){
	models.Quiz.findById(quizId)
		.then(function(quiz){
			if (quiz){
				req.quiz = quiz;
				next();
			}else{
				next(new Error('No existe quizId=' +quizId));
			}
		}).catch(function(error){next(error);});
};

// GET /quizzes
exports.index = function(req, res, next) {
   
   var search = req.query.search || '';
 
   if(search===''){
 
    models.Quiz.findAll()
      .then(function(quizzes) {
        res.render('quizzes/index.ejs', { quizzes: quizzes, search:search});
      })
      .catch(function(error) {
        next(error);
      });
 
   }else{
     search1 = "%" + search.replace("","%") +"%";
     models.Quiz.findAll({where: ["question like ?", search1]})
     .then(function(quizzes) {
       quizzes.sort();
       res.render('quizzes/busqueda.ejs', { quizzes: quizzes, search:search});
 
     })
     .catch(function(error) {
       next(error);
     });
 
   }
  };

// GET /quizzes/:id
exports.show = function(req, res, next) {
	models.Quiz.findById(req.params.quizId)
		.then(function(quiz) {
			if (quiz) {
				var answer = req.query.answer || '';

				res.render('quizzes/show', {quiz: req.quiz,
											answer: answer});
			} else {
		    	throw new Error('No existe ese quiz en la BBDD.');
		    }
		})
		.catch(function(error) {
			next(error);
		});
};


// GET /quizzes/:id/check
exports.check = function(req, res) {
	models.Quiz.findById(req.params.quizId)
		.then(function(quiz) {
			if (quiz) {
				var answer = req.query.answer || "";

				var result = answer === req.quiz.answer ? 'Correcta' : 'Incorrecta';

				res.render('quizzes/result', { quiz: req.quiz, 
											   result: result, 
											   answer: answer });
			} else {
				throw new Error('No existe ese quiz en la BBDD.');
			}
		})
		.catch(function(error) {
			next(error);
		});	
};

exports.autor = function(req, res, next) {

	res.render('quizzes/autor', {});
};