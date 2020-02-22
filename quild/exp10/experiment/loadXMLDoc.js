/**
 * 
 */
function loadXMLDoc(url,tag)
{
	loadXMLDoc(url,tag,false);
}
function loadXMLDoc(url,tag,flag)
{
var xmlhttp;
var txt,x,xx,i;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	    if(flag)document.getElementById(tag).innerHTML='<pre class="brush:php;">'+xmlhttp.responseText+'</pre>';
	    else document.getElementById(tag).innerHTML=xmlhttp.responseText;
    }
  };
xmlhttp.open("GET",url,true);
xmlhttp.send();
}
