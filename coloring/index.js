document.addEventListener('DOMContentLoaded', function() {

	let shapes = document.querySelectorAll('div.shape');
	let targetElement;

	let colors = colorObj.colors;

	Object.keys(colors).forEach(function(colorKey) {
		let container = document.querySelector('.swatch-container');
		let colorElement = document.createElement('span');
		colorElement.classList.add(colors[colorKey]['color'], 'swatch')
		colorElement.innerHTML = colors[colorKey]['label'];
		container.appendChild(colorElement);
	});

	function removeHighlights() {
		shapes.forEach(function(shape) {
			shape.classList.remove('highlight');
		})
	}

	function removeColors() {
		Object.keys(colors).forEach(function(colorKey) {
				targetElement.classList.remove(colors[colorKey]['color']);
		});
	}

	shapes.forEach(function(shape) {
		shape.addEventListener('click', function(e) {
			targetElement = this;
			removeHighlights();
			this.classList.add('highlight');
		});
	});

	window.addEventListener('keydown', function(e) {
		if (targetElement) {
			removeColors();
			targetElement.classList.add(colors[e.keyCode]['color']);
		}
	});

});








