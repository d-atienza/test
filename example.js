let i = 0;

function preload() {
  img = loadImage('https://c02.purpledshub.com/uploads/sites/48/2023/11/Euclid-perseus-galaxy-cluster.jpg?webp=1');
}

function setup() {
	createCanvas(800, 600);
	frameRate(3);
}

function draw() {
	background(100);
	image(img, 0, 0);
	createSun();
	createSolarSystem();
	instructions();
}

