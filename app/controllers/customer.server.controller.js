let Customer = require('mongoose').model('Customer');
exports.create = function(req, res, next){
    var customer = new Customer(req.body);
    customer.save(function(err){
        if(err){
            return next(err);
        }else{
            res.render('login');
        }
    });
};

exports.viewfeedback = function(req, res, next){
    Customer.find({}, function(err, customers){
        if(err){
            return next(err);
        }else{
            res.render('viewcustomerfeedback', { customerList : customers });
           /* res.render('viewcustomerfeedback', {
               userName : customers.email,
               feedback : customers.feedback
            });*/
        }
    });
}