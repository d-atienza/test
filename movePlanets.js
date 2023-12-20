// set specific locations so they don't cause a cataclysmic collision
// 2 locations per planet were created so no overlap would occur
let locations = [[50, 100], [125, 325], [250, 500], [600, 400], [700, 250], [500, 50], [450, 350], [800, 550]];

function mousePressed() {
	for (let p of planets) {
		changeLocation(p);
	}
}

function changeLocation(p) {	
		if (i < locations.length) {
			p.x = locations[i][0];
			p.y = locations[i][1];
			i += 1;
		} else {
			i = 0;
		}
}

