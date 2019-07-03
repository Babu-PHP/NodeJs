var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service : 'gmail',
	auth : {
		user : 'youremail@gmail.com',
		pass : 'yourpassword'
	}
});

var mailerOptions = {
	form : 'youremail@gmail.com',
	to : 'myfriend@yahoo.com',
	subject ; 'Send email by Node Js',
	text : 'That was easy'
};

transporter.sendMail(mailerOptions, function(err, info){
	if(err){
		console.log(err);
	} else {
		console.log('Send email '+info.response);
	}
})