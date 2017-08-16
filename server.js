var express = require('express'); 
var morgan = require('morgan'); //request and response
var path = require('path');
//var http=require('http');
var crypto=require('crypto');
var bodyParser=require('body-parser');
var Pool=require('pg').Pool;


var config={
    user:'syam5492009',
    database:'syam5492009',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());


var articles={
    'article-one':
{
    title:'Article One SYAM',
    heading :'Article One',
    date :'aug 2015 8',
    content :
    `
    <p> this is the content of my three article.This is a simple Article one for testing purpose and it will help a lot for doing more</p>
    <p> this is the content of my three article.This is a simple Article one for testing purpose and it will help a lot for doing more</p>
    <p> this is the content of my three article.This is a simple Article one for testing purpose and it will help a lot for doing more</p>
    <p>Post YOur Comment </p><p><input type='text' id='data1'></input></p><p><input type='submit' value='submit'
    id='submit_id1'></input>
    <p> Users Comments </p> <p><textarea cols=100 rows=10 id='a1'></textarea></p>
    
    
    
    `
},

'article-two':
{
    title:'Article TWO SYAM',
    heading :'Article TWO',
    date :'aug 2015 8',
    content :
    `
    <p> this is the content of my three article.This is a simple Article two for testing purpose and it will help a lot for doing more</p>
   <p> this is the content of my three article.This is a simple Article two for testing purpose and it will help a lot for doing more</p>
    <p> this is the content of my three article.This is a simple Article two for testing purpose and it will help a lot for doing more</p>
    <p>Post YOur Comment </p><p><input type='text' id='data2'></input></p><p><input type='submit' value='submit'
    id='submit_id2'></input>
    <p> Users Comments </p> <p><textarea cols=100 rows=10 id='a2'></textarea></p>
    `
    
},
'article-three':
{
    title:'Article THREE SYAM',
    heading :'Article TWO',
    date :'aug 2015 8',
    content :
    `
    <p> this is the content of my three article.This is a simple Article two for testing purpose and it will help a lot for doing more</p>
   <p> this is the content of my three article.This is a simple Article two for testing purpose and it will help a lot for doing more</p>
    <p> this is the content of my three article.This is a simple Article two for testing purpose and it will help a lot for doing more</p>
    <p>Post YOur Comment </p><p><input type='text' id='data3'></input></p><p><input type='submit' value='submit'
    id='submit_id3'></input>
    <p> Users Comments </p> <p><textarea cols=30 rows=10 id='a3'></textarea></p>
    `
    
}
};







function createTemplate(data)
{
    var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

var htmlTemplate=`
<html>
    <head>
        <title>
           
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link href="/ui/style.css" rel="stylesheet" type="text/css"/>
    </head>
<body>
    <div class="container">
                    <a href="/">HOME</a>
                    <p>${heading}</p>
                    <hr/>
                    <div>
                        <p> ${date}</p>
                        </div>
                      
                    <div>
                       ${content}
                    </div>
                    <script src="/ui/main.js"></script>
    </div>
</body>
</html>


`;
return htmlTemplate;
}
app.get('/',function(req,res)
{
   res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


function hash(input,salt)
{
    var hashed=crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
    return ['pbkdf2',"10000",salt,hashed.toString('hex')].join('$');
  //  return hashed.toString('hex');
    
    //algorithm --- md5
    // password === 
    //salt --- for hackers purpose
    
    
}



/* Hashing */
app.get('/hash/:input',function(req,res)
{
   var hashedString=hash(req.params.input,'this-is-some-random-stirng');
  res.send(hashedString);
});



app.post('/create-user',function(req,res)
{
    var username=req.body.username;
    var password=req.body.password;
   var salt=crypto.randomBytes(128).toString('hex');
   var dbString=hash(password,salt);
   pool.query("INSERT INTO 'test_user' (username,password) values($1,$2)",{username,dbString},function(req,res)
   {
   
    if(err){
        res.status(500).send(err.toString());}
        else{
        res.send(JSON.stringify(result));}
   });
});



var pool=new Pool(config);
app.get("/test-db",function(req,res)
{
   
 //  res.send('test-db');
   //make a select request
   
  pool.query("select *from sql_test",function(err,result)
   {
       
       if(err){
        res.status(500).send(err.toString());}
        else{
        res.send(JSON.stringify(result));}
   });
  
    
});


var counter=0;
app.get("/counter",function(req,res)
{
    counter=counter+1;
   res.send(counter.toString()); 
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var cnames=[];
app.get('/comment-name',function(req,res)
{
    var name=req.query.name;
   names.push(name);
   //json
   
   res.send(JSON.stringify(names));
});



var names=[];
app.get('/submit-name',function(req,res)
{
    var name=req.query.name;
   names.push(name);
   //json
   
   res.send(JSON.stringify(names));
});



app.get("/:articleName",function(req,res)
{
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
   
});


/*app.get("/article-two",function(req,res)
{
    res.send(createTemplate(article2));
    //res.sendFile(path.join(__dirname,"ui","article-two.html")); 
});
app.get("/article-three",function(req,res)
{
   res.sendFile(path.join(__dirname,"ui","article-three.html")); 
});
*/
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80


var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
