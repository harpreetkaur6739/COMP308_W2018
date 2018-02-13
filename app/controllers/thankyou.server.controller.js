exports.render = function(req, res){
    var session = req.session;
    res.render('thankyou', {userName: session.username});
}