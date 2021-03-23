class Crag {
    constructor(name, overview, travel) {
        this.name = name;
        this.overview = overview;
        this.travel = travel;
        this.rocks = [];
    }

    createCrag(name) {
        const newCrag = new Crag(name);
        crags.push(newCrag);
        return newCrag;
    }

    addRock(rock) {
        this.rocks.push(rock);
    }

    getRocks() {
        return this.rocks;
    }
}

class Rock {
    constructor(name) {
        this.name = name;
        this.routes = [];
    }

    createRock(crag, name) {
        const newRock = new Rock(name);
        crag,addRock(newRock);
        return newRock;
    }

    addRoute(name, rating, style) {
        this.routeList.push({name, rating, style});
    }
}

const crags = [];

const LongDong = Crag.createCrag("Long Dong");
const BackDoorB1 = Rock.createRock(LongDong, "Back Door - B1");
BackDoorB1.addRoute("Bo", 5.7, "Trad");
BackDoorB1.addRoute("Po", 5.5, "Trad");
BackDoorB1.addRoute("Mo", 5.6, "Trad");
BackDoorB1.addRoute("Fo", 5.7, "Trad");


export {
    Crag,
    Rock,
    crags
}