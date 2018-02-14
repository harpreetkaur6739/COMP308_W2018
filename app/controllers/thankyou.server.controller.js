exports.render = function(req, res){
    var session = req.session;
    console.log("thankyou:",session.username);
    if(session){
        res.render('thankyou', {userName: session.username});
    }else{
        res.render('login');
    }
    
}