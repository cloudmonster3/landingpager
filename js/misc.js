// MISCELLANEOUS FUNCTIONS
// print a debug log
function print_debug(debug) {
	const fs = require('fs') 
	console.error("STAGED ERROR: " + debug)
	fs.writeFile('debug.txt', debug, (err) => {
		// In case of a error throw err. 
		if (err) throw err; 
	}) 
}