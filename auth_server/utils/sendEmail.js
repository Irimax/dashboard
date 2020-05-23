const nodemailer = require('nodemailer');

const sendEmail = async (options) => {

//   const output = `
//   <p>Vous avez un nouveau message</p>
//   <h3>Détails client</h3>
//   <ul>  
//     <li>Nom: ${req.body.first_name}</li>
//     <li>Prénom: ${req.body.last_name}</li>
//     <li>Email: ${req.body.email}</li>
//     <li>Téléphone: ${req.body.phone}</li>
//   </ul>
//   <h3>Message</h3>
//   <p>${req.body.message}</p>
// `;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html: "<p>HTML version of the message</p>"
  };

  const info = await transporter.sendMail(message);

  console.log('Message sent: %s', info.messageId);
};

module.exports = sendEmail;
