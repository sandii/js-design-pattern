const mixin = {
	forward  () {console.log(this.name +' is going forward'); },
	backward () {console.log(this.name +' is going backward');},
	attack () {console.log(this.name +' is attacking!!');},
};

function Tank (name) { this.name = name; }
function Car (name)  { this.name = name; }

function augment (src, dst, optArr) {
	if (optArr) {
		for (let key of optArr) {
			if (!mixin.hasOwnProperty(key)) continue;
			dst[key] = src[key];
		}
	} else {
		for (let key in src) {
			if (!mixin.hasOwnProperty(key)) continue;
			dst[key] = src[key];
		}
	}
}


// using
augment(mixin, Tank.prototype);
augment(mixin, Car.prototype, ['forward', 'backward']);

let honda = new Car('honda');
let t50 = new Tank('t50');

honda.forward();
t50.forward();
t50.attack();
