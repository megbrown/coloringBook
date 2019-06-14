document.addEventListener('DOMContentLoaded', function() {

	let shapes = document.querySelectorAll('div.shape');
	let targetElement;

	let colors = colorObj.colors;

	let count = Object.keys(colors).length;

	Object.keys(colors).forEach(function(colorKey, index) {
		let containerLeft = document.querySelector('.swatch-container-left');
		let containerRight = document.querySelector('.swatch-container-right');

		let colorElement = document.createElement('span');
		colorElement.classList.add(colors[colorKey]['color'], 'swatch')
		colorElement.innerHTML = colors[colorKey]['label'];

		if (index < count/2) {
			containerLeft.appendChild(colorElement);
		} else {
			containerRight.appendChild(colorElement);
		}

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
			if (colors[e.keyCode]) {
				targetElement.classList.add(colors[e.keyCode]['color']);
			}
		}
	});

});








