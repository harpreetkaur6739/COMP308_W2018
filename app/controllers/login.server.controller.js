exports.render = function(req,res){
    var session = req.session;
    if (session.username) {
        res.render('thankyou');
    }
    else {
        res.render('login');      
    }
}