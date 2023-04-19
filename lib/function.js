const axios = require("axios");

function search(a, t) {
	return new Promise((async e => {
		e((await axios.get("http://nhentai-ttk.herokuapp.com/api/nhsearch?query=" + a + "&page=" + t)).data)
	}))
}

function read(a) {
	return new Promise((async t => {
		t((await axios.get("http://nhentai-ttk.herokuapp.com/api/nhdetail?code=" + a)).data)
	}))
}

function tags(a, t) {
	return new Promise((async e => {
		e((await axios.get("http://nhentai-ttk.herokuapp.com/api/nhtag?tag=" + a + "&page=" + t)).data)
	}))
}
module.exports.search = search, module.exports.read = read, module.exports.tags = tags;
