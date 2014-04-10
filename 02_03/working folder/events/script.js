var theGridNode = document.querySelector('ul.grid');

theGridNode.addEventListener('mouseover', function(e) {
	if (e.target.tagName === "IMG") {
		console.log(e);
		
		// div creation
		var myDivElement = document.createElement('div');
		myDivElement.className = "preview";
		
		// append the div to the event images parent
		e.target.parentNode.appendChild(myDivElement);
		
			// img creationg
			myNewImageElement = document.createElement('img');
			
			// img src creation
			myOriginalImageSrc = e.target.src;
			myNewImageElement.src = myOriginalImageSrc.substr(0, myOriginalImageSrc.length-7) + '.jpg';
			
			//console.log(myNewImageElement);
			
		// append the img tag inside the div tag
		myDivElement.appendChild(myNewImageElement);
		
		console.log(myDivElement);
	}
}, false);