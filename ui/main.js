console.log('Loaded!');

/*

//Article -one


var submit=document.getElementById("submit_id1");
submit.onclick=function()
{
   alert('hi');
   
   var request=new XMLHttpRequest();
  
  request.onreadystatechange=function()
  {
    if(request.readyState==XMLHttpRequest.DONE)
    {
        if(request.status==200)
        {
            var list="";
            var cnames=request.responseText;
            cnames=JSON.parse(cnames);
            for(var i=0;i<cnames.length;i++)
            {
                list+="<strong>"+cnames[i]+"</strong><br/>";
            }
            var ta=document.getElementById("a1");
            ta.innerHTML="<li>"+list+"</li>";
        }
    }
   
      
};  



var nameInput=document.getElementById("data1");
var name=nameInput.value;
  alert(name);
   
  request.open("GET","http://syam5492009.imad.hasura-app.io/comment-name?name="+name,true);
  request.send(null);
    
};*/





// change the text of main test file

/*var element =document.getElementById("main_text");

element.innerHTML="<h2>SAMPLE VALUE</h2>";


var img1=document.getElementById("im");
    alert(img1);
    marginLeft=0;
    alert("hai");
    function righ()
    {
        marginLeft=marginLeft+5;
        img1.style.marginLeft=marginLeft+'px';
        
    }
    
    
function fun()
{
    setInterval(righ(),1000);
}*/


//counter=0;
//Counter Code

/*

var button=document.getElementById("s");
alert(button);
button.onclick=function()
{
  var request=new XMLHttpRequest();
  
  request.onreadystatechange=function()
  {
    if(request.readyState==XMLHttpRequest.DONE)
    {
        if(request.status==200)
        {
            var counter=request.responseText;
            var span=document.getElementById("count");
            span.innerHTML=counter.toString();
        }
    }
  };
  
  
  //counter=counter+1;
  request.open("GET","http://syam5492009.imad.hasura-app.io/counter")
  request.send(null);
 
};*/

//Submit Name

var submit=document.getElementById("s");
submit.onclick=function()
{
   alert('hi');
   
   var request=new XMLHttpRequest();
  
  request.onreadystatechange=function()
  {
    if(request.readyState==XMLHttpRequest.DONE)
    {
        if(request.status==200)
        {
            alert("login success");
            
        }
        else if(request.status==403)
        {
            alert("username/password is invalid");
        }
        else if(request.status==500)
        {
            alert("something went wrong");
        }
        
    }
   
      
};  
var nameInput=document.getElementById("uname").value;
var pwdInput=document.getElementById("pwd").value;

  alert(nameInput);
   
  request.open("POST","http://syam5492009.imad.hasura-app.io/login",true);
  request.setRequestHeader("Content-Type:application/json");
  request.send(JSON.stringify({username:username,password:password}));
    
};











