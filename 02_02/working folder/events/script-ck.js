// variables
var gridNode=document.querySelector("ul.grid"),imageSelection=function(e){console.log(e);if(e.target.tagName==="IMG"){var t=this.querySelectorAll("li").length;if(t>1){var n=e.target.parentNode;console.log(n);var r=n.parentNode;console.log(r);r.removeChild(n)}else{var i=e.toElement.alt;console.log(i);document.querySelector("div#art p").innerHTML="<p>You've picked: "+i+"</p>"}}};gridNode.addEventListener("click",imageSelection,!1);