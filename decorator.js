function Macbook () {
	this.cost = _ => 200;
	this.screenSize = _ => 11.7;
}

// 3 decorators
const addMemory = mb => {
	const cost = mb.cost();
	mb.cost = _ => cost + 20;
};
const upgrade = mb => {
	const cost = mb.cost();
	mb.cost = _ => cost + 100;
};
const insurance = mb => {
	const cost = mb.cost();
	mb.cost = _ => cost * 1.5;
};

// using
const mb = new Macbook();
addMemory(mb);
console.log(mb.cost());
upgrade(mb);
console.log(mb.cost());
insurance(mb);
console.log(mb.cost());
