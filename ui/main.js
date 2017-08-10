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


counter=0;
//Counter Code
var button=document.getElementById("counter");
button.onClick=function()
{
  
  counter=counter+1;
  var span=document.getElementById("count");
  span.innerHTML=counter.toString();
  
    
};

