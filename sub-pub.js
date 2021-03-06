const subpub = {};
{
	const subs = {};
	let uid = 0;

	subpub.sub = (topic, cbk) => {
		if (!subs[topic]) {
			subs[topic] = [];
		}
		let token = uid++;
		subs[topic].push({ token, cbk });
		return token;
	};
	subpub.pub = (topic, data) => {
		if (!subs[topic]) return subpub;
		subs[topic].forEach(sub => sub.cbk(data));
		return subpub;
	};
	subpub.unsub = token => {
		for (let topic in subs) {
			let arr = subs[topic];
			let len = arr.length;
			for (let i = 0; i < len; i++) {
				if (arr[i].token === token) {
					arr.splice(i, 1);
					return subpub;
				}
			}
		}
		return subpub;
	};
}

// using
const subToken1 = subpub.sub('/login', data => console.log(data));
const subToken2 = subpub.sub('/login', data => console.info(data));
const subToken3 = subpub.sub('/login', data => console.warn(data));

subpub
	.pub('/login', 'sandii is here')
	.pub('/login', 'jack is here')
	.unsub(subToken3)
	.pub('/login', 'bobby is here');
