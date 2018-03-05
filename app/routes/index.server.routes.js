module.exports = function(app){
    var login = require('../controllers/login.server.controller');
    var feedback = require('../controllers/feedback.server.controller');
    var thankyou = require('../controllers/thankyou.server.controller');
    let signup = require('../controllers/signup.server.controller');
    
    app.get('/', login.render);
    app.get('/signup', signup.render);
    app.post('/feedback', feedback.render);
    app.post('/thankyou', thankyou.render);
}