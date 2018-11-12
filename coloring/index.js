document.addEventListener('DOMContentLoaded', function() {
	let colors = ['red', 'blue', 'green'];
	let shapes = document.querySelectorAll('div.shape');
	let targetElement;

	function removeHighlights() {
		shapes.forEach(function(shape) {
			shape.classList.remove('highlight');
		})
	}

	function removeColors(colorToKeep) {
		colors.forEach(function(color) {
			if (color !== colorToKeep) {
				targetElement.classList.remove(color);
			}
		})

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
		if (e.keyCode === 82) {
				removeColors('red');
				targetElement.classList.add('red');
			} else if (e.keyCode === 66) {
				removeColors('blue');
				targetElement.classList.add('blue');
			} else if (e.keyCode === 71) {
				removeColors('green');
				targetElement.classList.add('green');
			}
		}
	});

});








