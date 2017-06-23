var express = require('express');
var app = express();

app.use('/js', express.static(__dirname + 'builds/js'));
app.use('/lib', express.static(__dirname + 'builds/js/lib'));
app.use('/images', express.static(__dirname + 'builds/images'));
app.use('/css', express.static(__dirname + 'builds/css'));
app.use('/views', express.static(__dirname + 'builds/views'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname + '/builds' });
});


app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})

// var express = require('express')
// var app = express()
// var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
// var modRewrite = require('connect-modrewrite');

// // configuration =================

// app.use(express.static(__dirname + '/builds'));                 // set the static files location /public/img will be /img for users
// // app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
// // app.use(bodyParser.json());                                     // parse application/json
// app.use(express.static('public'))
// // app.get('/', function (req, res) {
// //   res.send('Hello World!')
// // })

// // app.listen(3000, function () {
// //   console.log('Example app listening on port 3000!')
// // })

// // app.configure(function() {
// // app.use(modRewrite(['^[^\\.]*$ /builds/index.html [L]']));
// // app.use(modRewrite(['^/builds$ /index.html']));
// // app.use(connect.static(options.base))
// // 	.listen(3000)
// // });

// // application -------------------------------------------------------------
// // app.get('/', function(req, res) {
// // 	res.sendfile('/builds/index.html'); // load the single view file (angular will handle the page changes on the front-end)
// // });

// // app.use(express.static('./builds'));

// // Because I like HTML5 pushstate .. this redirects everything back to our index.html
// app.all('*', function(req, res) {
//     res.sendfile('index.html', { root: 'builds' });
//     // res.send('Hello World');
// });

// // listen (start app with node server.js) ======================================
// // app.listen(8080);
// // console.log("App listening on port 8080");
// app.listen(8000, function () {
//   console.log('Example app listening on port 8000!')
// })