// DEPENDENCIES
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const app = express()
const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
	service: 'gmail',
	port: 465,
	secure: true,
	auth: {
		type: 'OAuth2',
		user: process.env.EMAIL,
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		refreshToken: process.env.REFRESH_TOKEN
	}
})


const sendEmail = function (req, res) {
	const email = req.body.email
	const name = req.body.name
	const message = req.body.message

	if (email === null || 
		name === null || 
		message === null) {
			res.status(500).send('Error')
	} else {
		const mailOptions = {
			from: email,
			to: 'j.dspears@yahoo.com',
			subject: `Contact form submitted by: ${name}`,
			text: 'You have received a new message. \n\n' +
				`Here are the details:\n \nName: ${name} \n ` +
				`Email: ${email}\n Message: \n ${message}`
		}

		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error)
				res.status(500).send('Success')
			} else res.status(200).send('Success')
		})
	}
}


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))


app.post('/email', sendEmail)


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))
