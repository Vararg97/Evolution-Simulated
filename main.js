var canvas = document.getElementById("canvas");
var numCreatures = document.getElementById("NC");
var genSlider = document.getElementById("numGensSlider");
var genSliderVal = document.getElementById("GN");
var genOut = document.getElementById("GC");
var lpgSlider = document.getElementById("lpGensSlider");
var lpgSliderVal = document.getElementById("LN");
var lpgOut = document.getElementById("LC");
var intSlider = document.getElementById("intGensSlider");
var intSliderVal = document.getElementById("IN");
var crnSlider = document.getElementById("crnGensSlider");
var crnSliderVal = document.getElementById("CN");
var runButton = document.getElementById("runBtn");
var normalControls = document.getElementById("normal");
var customControls = document.getElementById("custom");
var ctx;
var grid;
var creatures = {};
var previousGenerationCreatures = {};
var generation = 0;
var loopNum;
var genNum;
var slidersLocked = false;
var timeBetweenSteps = 2500;
var creaturesPerGeneration = 1000;
var loopsPerGeneration = 20;
var generationsToRun = 1;

genSliderVal.innerHTML = genSlider.value;
intSliderVal.innerHTML = intSlider.value*500;
crnSliderVal.innerHTML = crnSlider.value*100;
lpgSliderVal.innerHTML = lpgSlider.value;

function make2DArray(cols, rows) { 
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup(width, height) {
  generation = 0;
  previousGenerationCreatures = {};
  creatures = {};
  canvas.width = width*10;
  canvas.height = height*10;
  canvas.style = "border: 1px solid #000000;";
  ctx = canvas.getContext("2d");
  ctx.fillStyle = "lime";
  grid = make2DArray(width, height);
  for (var i = 0; i < grid.length; i++) {
    for (var a = 0; a < grid[i].length; a++) {
      grid[i][a] = null;
    }
    delete a;
  }
  delete i;
  makeCreatures(creaturesPerGeneration, 0, true);
  numCreatures.innerHTML = Object.keys(creatures).length;
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for (var i = 0; i < grid.length; i++) {
    for (var a = 0; a < grid[i].length; a++) {
      if (grid[i][a] != null) {
        if (creatures[grid[i][a]] == undefined) {
          grid[i][a] = null;
          continue;
        }
        switch (creatures[grid[i][a]].breathValue) {
          case 0:
            ctx.fillStyle = "#27408E";
          break;
          case 1:
            ctx.fillStyle = "#304FAF";
          break;
          case 2:
            ctx.fillStyle = "#536CB5";
          break;
          case 3:
            ctx.fillStyle = "#7688BB";
          break;
          case 4:
            ctx.fillStyle = "#98A5C0";
          break;
          case 5:
            ctx.fillStyle = "#C0C6CB";
          break;
        }
        ctx.fillRect(i*10, a*10, 10, 10);
      }
    }
    delete a;
  }
  delete i;
}

function step() {
  for (var i = 0; i < Object.keys(creatures).length; i++) {
    console.log(Object.keys(creatures)[i]);
    creatures[Object.keys(creatures)[i]].think();
  }
  delete i;
  updateBreath();
  draw();
  numCreatures.innerHTML = Object.keys(creatures).length;
}

function updateBreath() {
  var creatureIds = Object.keys(creatures);
  for (var i = 0; i < creatureIds.length; i++) {
    creatures[creatureIds[i]].breathValue++;
  }
}

function makeCreatures(numberOfCreaturesToMake, generation, randomOverride) {
  for (var i = 0; i < numberOfCreaturesToMake; i++) {
    var x = Math.floor(Math.random()*(canvas.width/10));
    var y = Math.floor(Math.random()*(canvas.height/10));
    while (grid[x][y] != null) {
      x = Math.floor(Math.random()*(canvas.width/10));
      y = Math.floor(Math.random()*(canvas.height/10));
    }
    if (randomOverride) {
      creatures[generation.toString().concat("-", i)] = new Creature("", "", x, y, generation, i, true);
      delete x;
      delete y;
      continue;
    }
    var parent1 = previousGenerationCreatures[Object.keys(previousGenerationCreatures)[Math.floor(Math.random()*Object.keys(previousGenerationCreatures).length)]];
    var parent2 = previousGenerationCreatures[Object.keys(previousGenerationCreatures)[Math.floor(Math.random()*Object.keys(previousGenerationCreatures).length)]];
    while (parent1.id == parent2.id) {
      parent2 = previousGenerationCreatures[Object.keys(previousGenerationCreatures)[Math.floor(Math.random()*Object.keys(previousGenerationCreatures).length)]];
    }
    creatures[generation.toString().concat("-", i)] = new Creature(parent1, parent2, x, y, generation, i, false);
    delete parent1;
    delete parent2;
    delete x;
    delete y;
  }
  draw();
}

function run() {
  genSlider.disabled = true;
  intSlider.disabled = true;
  crnSlider.disabled = true;
  lpgSlider.disabled = true;
  runButton.disabled = true;
  timeBetweenSteps = intSlider.value*500;
  creaturesPerGeneration = crnSlider.value*100;
  loopsPerGeneration = lpgSlider.value;
  generationsToRun = genSlider.value;
  genNum = 0;
  setup(50,50);
  loop(true);
}

function loop(start) {
  if (start) {
    loopNum = 0;
    genOut.innerHTML = generation+1;
  }
  lpgOut.innerHTML = loopNum+1;
  step();
  loopNum++;
  if (loopNum < loopsPerGeneration) {
    setTimeout(loop, timeBetweenSteps, false);
  } else {
    genNum++;
    if (genNum < generationsToRun) {
      nextGeneration();
      loop(true);
    } else {
      genSlider.disabled = false;
      intSlider.disabled = false;
      crnSlider.disabled = false;
      lpgSlider.disabled = false;
      runButton.disabled = false;
    }
  }
}

function nextGen(start) {
  if (start == undefined) {
    start = true;
  }
  if (start) {
    loopNum = 0;
    genOut.innerHTML = generation+1;
  }
  lpgOut.innerHTML = loopNum+1;
  step();
  loopNum++;
  if (loopNum < loopsPerGeneration) {
    setTimeout(nextGen, timeBetweenSteps, false);
  } else {
    genNum++;
  }
}

function nextGeneration() {
  previousGenerationCreatures = structuredClone(creatures);
  creatures = {};
  generation++;
  makeCreatures(creaturesPerGeneration, generation, false);
  numCreatures.innerHTML = Object.keys(creatures).length;
}

genSlider.oninput = function() {
  genSliderVal.innerHTML = genSlider.value;
}

intSlider.oninput = function() {
  intSliderVal.innerHTML = intSlider.value*500;
}

crnSlider.oninput = function() {
  crnSliderVal.innerHTML = crnSlider.value*100;
}

lpgSlider.oninput = function() {
  lpgSliderVal.innerHTML = lpgSlider.value;
}

function customSimulation() {
  normalControls.hidden = true;
  customControls.hidden = false;
}

function customSimulationBack() {
  normalControls.hidden = false;
  customControls.hidden = true;
}