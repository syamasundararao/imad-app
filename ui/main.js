console.log('Loaded!');
// change the text of main test file

var element =document.getElementById("main_text");

element.innerHTML="<h2>SAMPLE VALUE</h2>";


var img=document.getElementById("im");
marginLeft=0;
function righ()
{
    marginLeft=marginLeft+4;
    img.style.marginLeft=marginLeft+'px';
}
img.onClick=function()
{
 setInterval(righ,1000);
};
