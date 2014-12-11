var mongo = require('./mongo');

var mongoUrl = "mongodb://localhost:27017/test";
mongo.connect(mongoUrl, function(){
  console.log('Connected to mongo at: ' + mongoUrl);
  var coll = mongo.collection('users');

  var userObject = {
    username: "admin",
    password: "admin"
  };
    
 
  // create the new user
  coll.insert(userObject, function(err,user){
    console.log("created user");
  });

  coll.find().toArray(function(err, results) {
  console.dir(results);
  });
});