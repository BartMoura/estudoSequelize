const sequelize = require('sequelize');
const config = require('./config/config.js');
const conexaoDB = new sequelize(config); // criar conexão com o banco de dados

conexaoDB.query('SELECT * FROM pets', sequelize.QueryTypes.SELECT)
.then((data) => {
    console.log(data);
    conexaoDB.close();
})
.catch((error) => {
    console.log(error);
});


