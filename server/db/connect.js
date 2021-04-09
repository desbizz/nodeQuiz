const { Sequelize,QueryTypes } = require('sequelize');


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('nodequiz', 'mayur', 'mayowa000', {
  host: '10.0.0.2',
  dialect: 'mysql'
});
sequelize.authenticate();
// try {
//   sequelize.authenticate();
//   console.log('Connection has been established successfully.');
//   let basic= sequelize.query('SELECT * FROM ilance_projects', { raw: true })
//   .then(projects => {
//     console.log(projects)
//   }) 
//   console.log(basic)
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

module.exports = sequelize