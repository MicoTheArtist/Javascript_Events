document.querySelector(".grid").addEventListener("contextmenu",function(e){e.preventDefault();if(e.target.tagName==="IMG"){var t=document.createElement("div");t.className="preview";e.target.parentNode.appendChild(t);var n=document.createElement("img"),r=e.target.src;n.src=r.substr(0,r.length-7)+".jpg";t.style.left=e.offsetX+15+"px";t.style.top=e.offsetY+15+"px";t.appendChild(n);e.target.addEventListener("mouseout",function i(t){var n=t.target.parentNode.querySelector("div.preview");n.parentNode.removeChild(n);e.target.removeEventListener("mouseout",i,!1)},!1);e.target.addEventListener("mousemove",function(e){t.style.left=e.offsetX+15+"px";t.style.top=e.offsetY+15+"px"})}},!1);