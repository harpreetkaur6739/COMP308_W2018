let customers = require('./../controllers/customer.server.controller');
module.exports = function(app){
    app.route('/signup').post(customers.create);
    app.route('/viewfeedback').get(customers.viewfeedback);
}