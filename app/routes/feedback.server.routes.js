module.exports = function(app){
    var feedback = require('../controllers/feedback.server.controller');
   
    app.post('/feedback', feedback.render);
}