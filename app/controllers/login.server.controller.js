exports.render = function(req,res){
    var session = req.session;
    
    if (session.username) {
        res.render('thankyou', {userName: session.username});
    }
    else {
        res.render('login');      
    }
}