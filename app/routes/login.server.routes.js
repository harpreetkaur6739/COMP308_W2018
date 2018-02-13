module.exports = function(app){
    var login = require('../controllers/login.server.controller');
   
    app.get('/', login.render);
}