// temperature converter
let log4js = require('log4js');
let logger = log4js.getLogger();
module.exports = function cels(value){
	let f=Math.round(value*9/5 +32);
	return(f);
}