document.addEventListener('DOMContentLoaded', function() {

	let colors = {
		'82': {
			color: 'red',
			label: 'R'
		},
		'66': {
			color: 'blue',
			label: 'B'
		},
		'71': {
			color: 'green',
			label: 'G'
		}
	}

	let shapes = document.querySelectorAll('div.shape');
	let targetElement;

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








