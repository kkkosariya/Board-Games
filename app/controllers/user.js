
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
}

exports.index = function(req, res){
//  res.render('index', { title: 'Express' });
  res.render('home', { title: 'Death' });
};

exports.index2 = function(req, res){
  res.render('index', { title: 'Express2' });
};