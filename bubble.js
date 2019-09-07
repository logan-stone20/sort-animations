let current = 0;

function bubbleSort() {
	fill(0);
	sorted = true;
	for (let i = 1; i < ar.length; i++) {
		if (ar[i] < ar[i - 1]) {
			console.log("y")
			let temp = ar[i];
			ar[i] = ar[i-1];
			ar[i-1] = temp;
			current = i;
			sorted = false;
		} 
	}
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
	bubbleSort();
	if (sorted) {
		for (let i = 0; i < ar.length; i++) {
			if (i == counter) {
				fill('#ff0339');
			} else {
				fill(255);
			}	
			rect(offset + i*3, canvasHeight - ar[i] * rectHeight, width, ar[i] * rectHeight );
		}
		redStreak();
	}
}