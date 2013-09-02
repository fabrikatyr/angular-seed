var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'ec2-50-19-213-178.compute-1.amazonaws.com',
  user     : 'testdb101',
  password : 'testdb101',
});

connection.connect(function(err) {
  // connected! (unless `err` is set)
});

var post  = {id: 1, title: 'Hello MySQL'};
var query = connection.query('INSERT INTO posts SET ?', post, function(err, result) {
  // Neat!
});
console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
