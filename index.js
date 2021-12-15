class Formatter {
	//add static methods here
	static capitalize(string) {
		return string[0].toUpperCase() + string.slice(1);
	}
	static sanitize(string) {
		return string.replace(/[^A-Za-z0-9-'\s]+/g, "");
	}

	static titleize(string) {
		const except = [
			"the",
			"a",
			"an",
			"but",
			"of",
			"and",
			"for",
			"at",
			"by",
			"from",
		];
		const arr = string.split(" ");
		const newArr = [];

		arr.forEach((word) => {
			if (except.includes(word)) {
				return newArr.push(word);
			} else {
				return newArr.push(this.capitalize(word));
			}
		});
		return this.capitalize(newArr.join(" "));
	}
}
