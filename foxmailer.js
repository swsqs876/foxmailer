var nodemailer = require("nodemailer")

var smtpTransport = nodemailer.createTransport("SMTP",{
	host:"smtp.hi-design.hk",
	secureConnection: true,
	port:
	auth:{
		user:"chloe@hi-design.hk",
		pass:""
	}
});

var mailOptions = {
	from:"chloe@hi-design.hk",
	to:"",
	subject:"hello nodemailer",//mail title
	html:"<b>thanks for visiting</b> Hi, nice to meet you!"//html content
}

smtpTransport.sendMail(mailOptions, function(error, response){
	if(error){
		console.log(error);
	} else {
		console.log("Message sent:" + response.message);
	}
	//smtpTransport.close();
})
