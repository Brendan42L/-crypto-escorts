const nodeMailer = require("nodemailer");

const sendEmail = (emailData) => {
    const transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "cryptoescorts@gmail.com",
        pass: "_66SPs>n",
      },
    });
    return transporter
      .sendMail(emailData)
      .then((info) => console.log(`Message sent: ${info.response}`))
      .catch((err) => console.log(`Problem sending email: ${err}`));
  };


  export default sendEmail;