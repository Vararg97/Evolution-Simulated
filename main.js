var inputRange = document.getElementById("gensToRun");
var inputNumber = document.getElementById("gensToRunNum");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var creatures = {
	land1: {}
}
var grid = []
var numL;
var numW;

class creature {
	constructor() {
  	this.color = null;
    this.type = null;
    this.gene = null;
  }
}

function oneTimeSetup(width, height) {
	numH = canvas.height / height;
  numW = canvas.width / width;
  for (var i = 0; i < canvas.width; i++) {
  	grid[i] = [];
  	for (var a = 0; a < canvas.height; a++) {
			grid[i][a] = null;
		}
  }
  console.log(numW, numH);
}

function updateUI (trigger) {
	switch (trigger) {
  	case "range":
   		inputNumber.value = inputRange.value;
    break;
    case "num":
    	inputRange.value = inputNumber.value;
    break;
    case "num2":
    	if (inputNumber.value > 100) {
      	inputNumber.value = 100;
      } else if (inputNumber.value < 1) {
      	inputNumber.value = 1;
      }
      inputRange.value = inputNumber.value;
    break;
  }
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < canvas.width; i++) {
  	for (var a = 0; a < canvas.height; a++) {
			if (grid[i][a] != null) {
      	ctx.fillStyle = grid[i][a].color;
        ctx.fillRect(i*numW, a*numH, numW, numH);
      }
		}
  }
}

function run() {
	console.log(inputRange.value);
}
