var fs = require("fs");
var path = require("path");

var counter = path.join(__dirname, "/counter");

function inc() {
	fs.writeFileSync(counter, parseInt(fs.readFileSync(counter)) + 1);
}

module.exports = inc;