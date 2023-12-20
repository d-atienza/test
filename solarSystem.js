// planet objects
let mars = {
    x: 50,
    y: 50,
    diameter: 50,
    colour: "rgba(247,55,55,0.79)"
}

let jupiter = {
    x: 500,
    y: 50,
    diameter: 100,
    colour: "rgba(67,67,220,0.86)"
}

let venus = {
    x: 250,
    y: 500,
    diameter: 200,
    colour: "rgba(27,95,2,0.78)"
}

let mercury = {
    x: 700,
    y: 300,
    diameter: 150,
    colour: "rgba(255,165,0,0.82)"
}

let planets = [mercury, jupiter, mars, venus]

function createSolarSystem() {
for (let p of planets) {
    drawPlanet(p);
}
}


// p = planet
function drawPlanet(p) {
fill(p.colour);
return circle(p.x, p.y, p.diameter);
}




