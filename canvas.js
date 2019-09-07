let width = 5;
let canvasWidth = 680;
let canvasHeight = 600;
let rectHeight = 2;
let offset = canvasWidth/6;
let ar;
let arLength;
let sorted = false;
let counter = 0;

function makeArray() {
	let ar = new Array(canvasWidth/4);
	for (let i = 0; i < ar.length; i++) {
		ar[i] = floor(random(200));
	}
	return ar;
}

function redStreak() {
	counter++;
}

function setup() {
	var sortCanvas = createCanvas(canvasWidth, canvasHeight);
	sortCanvas.parent("sort-canvas")
	ar = makeArray();
	arLength = ar.length;
}