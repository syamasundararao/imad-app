var express = require('express'); 
var morgan = require('morgan'); //request and response
var path = require('path');

var app = express();
app.use(morgan('combined'));

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
    </div>
</body>
</html>


`;
return htmlTemplate;
}

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
var names=[];
app.get('/submit-name/:name',function(req,res)
{
    var name=req.param.name;
   names.push(name);
   //json
   
   res.send(JSON.stringify(names));
});

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
