//Definicion de modelo Quiz:

module.exports = function(sequelize, DataTypes){
	return sequelize.define('Quiz',
							{ question: { type: DataTypes.STRING,
										validate: {notEmpty: {msg: "SE ha olvidado de rellenar la pregunta!"}}
									},
								answer: {type: DataTypes.STRING,
										validate: {notEmpty: {msg: "Se ha olvidado de rellenar la respuesta!"}}}
							});
};