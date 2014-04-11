// variables
var greyNode = document.querySelector('ul.grid');

// functions
var contextMenu = function(e) {
	//console.log(e);
	
	// create the new DIV element
	var myDiv = document.createElement('div');
	myDiv.className = "preview";
	e.target.parentNode.appendChild(myDiv);
	
	// create the new IMG element
	var myImg = document.createElement('img');
	originalImgSrc = e.target.src;
	myImg.src = originalImgSrc.substr(0, originalImgSrc.length - 7) + ".jpg";
	
	// append the IMG to the DIV element
	myDiv.appendChild(myImg);
	
	// offset the position of the DIV element about 15px Left and 15px Top	
	myDiv.style.left = e.offsetX + 15 + 'px';
	myDiv.style.top = e.offsetY + 15 + 'px';
	
	// on the 'mouseout' event remove the new DIV I added to the DOM
	e.target.addEventListener('mouseout', function handler(d) {
		var myOpenDiv = d.target.parentNode.querySelector('div.preview');
		myOpenDiv.parentNode.removeChild(myOpenDiv);
		d.target.removeEventListener('mouseout', handler, false);
	}, false);
	
	// when the mouse is moved and while active have the offset div offset 
	// with it about 15 px Left and 15 px Top
	e.target.addEventListener('mousemove', function(f) {
		console.log(f);
		myDiv.style.left = f.offsetX + 15 + 'px';
		myDiv.style.top = f.offsetY + 15 + 'px';
	}, false);
};

// listeners
greyNode.addEventListener('click', contextMenu, false);