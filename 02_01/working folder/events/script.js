// Dom Selection
var theGrid = document.querySelector('ul.grid');

theGrid.addEventListener('click', function(e) {
	console.log(e);
	var removeTarget = e.target.parentNode;
	removeTarget.parentNode.removeChild(removeTarget);
}, false);