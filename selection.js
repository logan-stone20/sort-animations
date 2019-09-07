
let current = 0;


function selectionSort() {
	minIndex = current;
	sorted = true;
	for (let i = current + 1; i < ar.length; i++) {
		if (ar[i] < ar[minIndex]) {
			minIndex = i;
			sorted = false;
		}
	}
	temp = ar[current];
	ar[current] = ar[minIndex];
	ar[minIndex] = temp;
	current++;
}


function draw() {
	background('#285c4d');
	for (let i = 0; i < ar.length; i++) {
		if (i == current) {
			fill('#ff0339');
		} else {
			fill(255);
		}
		rect(offset + i*3, canvasHeight - ar[i] * rectHeight, width, ar[i] * rectHeight );
	}
	selectionSort();
	if (sorted) {
		for (let i = 0; i < ar.length; i++) {
			if (i == counter) {
				fill("#ff0339");
			} else {
				fill(255);
			}	
			rect(offset + i*3, canvasHeight - ar[i] * rectHeight, width, ar[i] * rectHeight );
		}
		redStreak();
	}
}