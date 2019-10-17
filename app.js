// DEPENDENCIES
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.EMAIL_PASSWORD
	}
});


const sendEmail = function (req, res) {
	const email = req.body.email;
	const name = req.body.name;
	const message = req.body.message;

	const mailOptions = {
		from: email,
		to: 'j.dspears@yahoo.com',
		subject: `Contact form submitted by: ${name}` ,
		text: 	'You have received a new message. \n\n' + 
				`Here are the details:\n \nName: ${name} \n ` + 
				`Email: ${email}\n Message: \n ${message}`
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) console.log(error);
		else res.send("Success");
	});
};


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));


app.use('/email', sendEmail);


app.listen(PORT, () => {
	console.log(`Listening on PORT: ${PORT}`);
});
