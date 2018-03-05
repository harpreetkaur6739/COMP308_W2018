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
};

exports.authenticate = function(req, res, next){
    console.log('request: ' + req);
    console.log('username: ' + req.userName);
    console.log('password: ' + req.password);
    Customer.authenticate(req.userName,req.password, function(success){
        console.log(success);
        if(!success){
            return next(err);
        }else{
            res.render('feedback');
           /* res.render('viewcustomerfeedback', {
               userName : customers.email,
               feedback : customers.feedback
            });*/
        }
    })
};