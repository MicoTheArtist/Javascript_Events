// variables
var gridNode = document.querySelector('ul.grid');

// methods
var imageSelection = function(e) {
	console.log(e);
	if (e.target.tagName === "IMG") {
		var liNodes = this.querySelectorAll('li').length;
		if (liNodes > 1) {
			var removeTarget = e.target.parentNode;
			console.log(removeTarget);
			var ParentNodeOfTarget = removeTarget.parentNode;
			console.log(ParentNodeOfTarget);
			ParentNodeOfTarget.removeChild(removeTarget);
		} else {
			var photoTitle = e.toElement.alt;
			console.log(photoTitle);
			document.querySelector('div#art p').innerHTML = "<p>You've picked: "+photoTitle+"</p>";
		}
	}
};

// listeners
gridNode.addEventListener('click', imageSelection, false);