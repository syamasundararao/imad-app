console.log('Loaded!');
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
var button=document.getElementById("counter");
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
 
};

