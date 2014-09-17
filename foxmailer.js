var nodemailer = require("nodemailer")
var XLSX = require("xlsx");

/* *
 * this module need Excel component if running
 */
if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('receivers.xlsx');

var worksheet;
var sheet_name_list = workbook.SheetNames;
sheet_name_list.forEach(function(y) {
	worksheet = workbook.Sheets[y];
});
console.log("Read excel success, start send email");

/* *
 * mail function
 */
var smtpTransport = nodemailer.createTransport("SMTP",{
	host:"smtp.hi-design.hk",
	secureConnection: true,
	port: 995,
	auth:{
		user:"chloe@hi-design.hk",
		pass:""
	}
});

for (z in worksheet) {
	/* use slow method to find all email address*/
	switch(z[0])
	{
	case '!':
		continue;
		break;
	case 'A':
		var mailOptions = {
			from:"chloe@hi-design.hk",
			to:JSON.stringify(worksheet[z].v),
			subject:"hello nodemailer",//mail title
			html:"<b>thanks for visiting</b> Hi, you are" + JSON.stringify(worksheet[z].v) + "!",//html content
		}

		smtpTransport.sendMail(mailOptions, function(error, response){
			if(error){
				console.log(error);
			} else {
				console.log("Message sent:" + response.message);
			}
			//smtpTransport.close();
		})
		break;
	default:
		break;
	}
}
