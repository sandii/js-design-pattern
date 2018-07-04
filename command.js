const carShop = {
	buy  (model, id) {console.log(`${model}-${id} bought!`);},
	rent (model, id) {console.log(`${model}-${id} rented!`);},
	view (model, id) {console.log(`${model}-${id} viewed!`);},
};
// we can buy, rent or view a car at car shop
// but you don't want to expose these api directly, so..

carShop.execute = (action, model, id, ...args) => {
	let fn = carShop[action];
	if (!fn) return;
	fn.apply(carShop, [model, id, ...args]);
};

// using
carShop.execute('buy',  'ford',  1234);
carShop.execute('rent', 'honda', 5678);
carShop.execute('view', 'audi',  2468);
