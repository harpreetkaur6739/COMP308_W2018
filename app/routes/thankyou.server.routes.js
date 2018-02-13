module.exports = function(app){
    var thankyou = require('../controllers/thankyou.server.controller');
   
    app.post('/thankyou', thankyou.render);
}