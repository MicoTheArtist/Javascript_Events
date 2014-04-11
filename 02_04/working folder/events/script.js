// variables
var gridNode = document.querySelector('ul.grid');

// functions
var imageExpand = function(e) {
	if (e.target.tagName === 'IMG') {
		
		var gridNode = document.querySelector('ul.grid');
		
		// make the DIV element and place it inside the images li element
		var myDiv = document.createElement('div');
		myDiv.className = 'preview';
		e.target.parentNode.appendChild(myDiv);
		
		// make the IMG element and place it inside the new DIV element
		var myImg = document.createElement('img');
		var currentImagesSrc = e.target.src;
		myImg.src = currentImagesSrc.substr(0, currentImagesSrc.length - 7)+".jpg";
		myDiv.appendChild(myImg);
		
		// on 'mouseout' remove the image element and remove the 'mouseout' listener
		e.target.addEventListener('mouseout', function handler(d) {
			var myFromDivNode = d.target.parentNode.querySelector('div.preview');
			console.log(myFromDivNode);
			myFromDivNode.parentNode.removeChild(myFromDivNode);
			e.target.removeEventListener('mouseout', handler, false);
		}, false);
		
	} // check if image is clicked on
};

// listeners
gridNode.addEventListener('mouseover', imageExpand, false);