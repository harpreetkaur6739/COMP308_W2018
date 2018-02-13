exports.render = function(req,res){    
    var userName = req.body.userName;
    var session = req.session;
    session.username = userName;  
    console.log('Inside feedback:' , session.username); 
    res.render('feedback', {
       emailAddr:   session.username
    });
}