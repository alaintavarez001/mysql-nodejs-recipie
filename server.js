var mysql= require ('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fundraising_app'
});
   
var port = 9000;
var exoress = require('expires');
var app = express();

//purpose if this is to enable cross domain requesrs
app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	next();
});

app.get('/transactions', function(req,res){
	
});

app.listen(port);
console.log("Server listening on port "+port);