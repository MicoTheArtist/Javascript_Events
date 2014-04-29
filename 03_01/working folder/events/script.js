// variables
var smallImageButton = document.querySelector('img.preview');

// functions
var imagePreview = function(e) {
	
	// variables
	var ImglowRes = e.target.src;
	var myOverlay = document.querySelector('img.preview');

	// create the big IMG node
	var imgHighRes = document.createElement('img');
	imgHighRes.className = "bgImg";
	imgHighRes.src = ImglowRes.substr(0, ImglowRes.length -7)+".jpg";
	myOverlay.appendChild(highRes);

	// create the spinner IMG node
	var imgSpinner = document.createElement('img');
	mySpinner.className = 'spinner';
}

// listeners
smallImageButton.addEventListener('click', imagePreview, false);