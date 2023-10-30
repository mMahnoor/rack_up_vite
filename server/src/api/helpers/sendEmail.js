const nodemailer = require('nodemailer');
require('dotenv').config();

exports.sendingMail = async({from, to, subject, text}) =>{

    try {
        let mailOptions = ({
            from,
            to,
            subject,
            text
        })
        const Transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // const transport = await Transporter.sendMail(mailOptions);
    
        //return the Transporter variable which has the sendMail method to send the mail
        //which is within the mailOptions
        return await Transporter.sendMail(mailOptions);
    } catch (error) {
        return false
    }
      
  }


