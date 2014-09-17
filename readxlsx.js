/* *
 * this module need Excel component if running
 */
if(typeof require !== 'undefined') XLSX = require('xlsx');
console.log('read start!');
var workbook = XLSX.readFile('receivers.xlsx');
console.log('read success!');
var sheet_name_list = workbook.SheetNames;
sheet_name_list.forEach(function(y) {
	var worksheet = workbook.Sheets[y];
	for (z in worksheet) {
		if(z[0] === '!') continue;
		console.log(y + '!' + z + '=' + JSON.stringify(worksheet[z].v));
	}
});
