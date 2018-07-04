const produce = (_ => {
	function F () {};
	return proto => {
		F.prototype = proto;
		return new F();
	};
})();

// using
const o = produce({
	x : 1,
	y : 2,
});
console.log('o.x: '+ o.x);
console.log('o.y: '+ o.y);
console.log('keys: '+ Object.keys(o));
