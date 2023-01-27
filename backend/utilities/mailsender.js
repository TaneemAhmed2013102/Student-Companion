const nodemailer = require("nodemailer");

function mailSender(email, subject, text) {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "studentcompanion0@gmail.com",//Email Lagbo
        pass: "rgmygqtuuxwhnezc",//password lagbo
      },
    });
  
    var mailOptions = {
      from: "studentcompanion0@gmail.com",
      to: email,
      subject: subject,
      text: text
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
  
exports.mailSender = mailSender;