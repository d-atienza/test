// sun will stay constant and not change position

function createSun() {
	let sun = {
		x: 400,
		y: 300,
		diameter: 250,
		colour: {
			r: 255,
			g: 255,
			b: 0,
			opacity: 100
		}
	}
	
	fill(sun.colour.r, sun.colour.g, sun.colour.b, sun.colour.opacity);
	return circle(sun.x, sun.y, sun.diameter);
}

