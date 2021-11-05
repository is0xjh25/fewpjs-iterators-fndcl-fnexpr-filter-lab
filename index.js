function findMatching(drivers, string) {
	
	let res = drivers.filter(d => {
		return d.toLowerCase() === string.toLowerCase();
	})

	return res;
}

function fuzzyMatch(drivers, string) {

	let res = drivers.filter(d => {
		return string.includes(d[0]);
	})

	return res;
}

function matchName(drivers, string) {
	
	let res = drivers.filter(d => {
		return d["name"].toLowerCase() === string.toLowerCase();
	})

	return res;
}