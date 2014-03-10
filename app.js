var http = require('http'),
    express = require('express'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 8000,
    server = http.createServer(app);

app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
    app.set('views', __dirname + '/views');
    app.engine('html', require('ejs').renderFile);
});

app.get('/', function(req, res){
    res.render('index.html');
});

server.listen(port, function(){
    console.log('server was loaded by ' + port);
});