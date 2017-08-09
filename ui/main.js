console.log('Loaded!');
// change the text of main test file

var element =document.getElementById("main_text");

element.innerHTML="<h2>SAMPLE VALUE</h2>";


var img=document.getElementById("im");
img.onclick=function()
{
  img.style.marginLeft='100px';  
};
