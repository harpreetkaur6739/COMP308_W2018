exports.render = function(req,res){    
    var userName = req.body.userName;
    var session = req.session;
    session.username = userName;  
    
    res.render('feedback', {
       emailAddr:   session.username
    });
}