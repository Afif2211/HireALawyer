const nodemailer = require('nodemailer');
const express = require('express');
const app = express();

app.use(express.json());


app.post('/send-message', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
   
    const userEmailAddress = 'hirethelawyer.pk@gmail.com'; // Replace with the user's email address
    const userPassword = 'filayfqpdlnoqjbl'; // Replace with the user's email password

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: userEmailAddress,
        pass: userPassword,
      },
    });

    const mailOptions = {
      from: userEmailAddress,
      to: 'hirealawyer.pk@gmail.com',
      subject: 'Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error send message' });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Message sent successfully' });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;
