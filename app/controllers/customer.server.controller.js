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

exports.submitFeedback = function(req, res, next){
    //initialize findOneAndUpdate method arguments
    console.log('email:' + req.body.email);
    var query = { "email": req.body.email };
    var update = req.body;
    console.log('customer:' + customer);
    var options = { new: true };
    var customer = new Customer();
    // Use the 'User' static 'findOneAndUpdate' method to update a specific user by user name
    Customer.findOneAndUpdate(query, update, options, (err, customer) => {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            //res.json(user);
            res.render('thankyou',{
                userName: 'test'
            }) //display all users
        }
    })
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
    console.log('request: ' + req.body.email);
    console.log('customer: ' + customer);
    console.log('username: ' + req.body.email);
    console.log('password: ' + req.body.password);
    var customer = new Customer();
    Customer.findOne({
        email: req.body.email
    }, (err, customer) => {
        console.log('returned from function');
        // If an error occurs continue to the next middleware
        if (err) {
            console.log('error1: '+err);
            return next(err);
        }
        
        // If a user was not found, continue to the next middleware with an error message
        if (!customer) {
            console.log('customer not found');
            res.render('login', {
                message: 'Unknown user'
            });
            return;
        }
        console.log('customer found.'+customer);
        // If the passport is incorrect, continue to the next middleware with an error message
        if (!customer.authenticate(req.body.password)) {
            console.log('authentication failed');
            res.render('login',{
                message: 'Invalid password'
            });
        }
        console.log('success authentication');
        // Otherwise, continue to the next middleware with the user object
        res.render('feedback',{
            customer: customer
        });
    });
    //var customer = new Customer(req.body);
   
   /* customer.authenticate(Customer, function(success){
        console.log('authenticated: ' + success);
        if(!success){
            return next(err);
        }else{
            res.render('feedback');
            res.render('viewcustomerfeedback', {
               userName : customers.email,
               feedback : customers.feedback
            });
        }
    })*/
};