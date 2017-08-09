var express = require('express'); 
var morgan = require('morgan'); //request and response
var path = require('path');

var app = express();
app.use(morgan('combined'));


var article1=
{
    title:'Article One SYAM',
    heading :'Article One',
    date :'aug 2015 8',
    content :
    `
    <p> this is the content of my three article.This is a simple Article one for testing purpose and it will help a lot for doing more</p>
    p> this is the content of my three article.This is a simple Article one for testing purpose and it will help a lot for doing more</p>
    p> this is the content of my three article.This is a simple Article one for testing purpose and it will help a lot for doing more</p>
    `
};

var article2=
{
    title:'Article TWO SYAM',
    heading :'Article TWO',
    date :'aug 2015 8',
    content :
    `
    <p> this is the content of my three article.This is a simple Article two for testing purpose and it will help a lot for doing more</p>
    p> this is the content of my three article.This is a simple Article two for testing purpose and it will help a lot for doing more</p>
    p> this is the content of my three article.This is a simple Article two for testing purpose and it will help a lot for doing more</p>
    `
};

var article1=
{
    title:'Article THREE SYAM',
    heading :'Article THREE',
    date :'aug 2015 8',
    content :
    `
    <p> this is the content of my three article.This is a simple Article one for testing purpose and it will help a lot for doing more</p>
    p> this is the content of my three article.This is a simple Article one for testing purpose and it will help a lot for doing more</p>
    p> this is the content of my three article.This is a simple Article one for testing purpose and it will help a lot for doing more</p>
    `
};
function createTemplate(data)
{
    data.title=title;
    data.heading=heading;
    data.date=date;
    data.content=content;

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
return htmlTemplate;

`;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get("/article-one",function(req,res)
{
   res.sendFile(path.join(__dirname,"ui","article-one.html")); 
});
app.get("/article-two",function(req,res)
{
    res.sendFile(path.join(__dirname,"ui","article-two.html")); 
});
app.get("/article-three",function(req,res)
{
   res.sendFile(path.join(__dirname,"ui","article-three.html")); 
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
