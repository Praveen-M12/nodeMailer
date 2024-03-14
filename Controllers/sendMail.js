const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'barney63@ethereal.email',
        pass: 'vRuCnghbqH4WhhBSFz'
    }
});

  let info = await transporter.sendMail({
    from: '"Parveen 👻" <barney63@ethereal.email>', // sender address
    to: "praveenmadabanvi@gmail.com", // list of receivers
    subject: "Hello ", // Subject line
    text: "Hello,  Whats up", // plain text body
    // html: "<b>Hello</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
// return res.status(200).json(info);
console.log(info);

};

module.exports = sendMail;

// // sendMail.js
// const nodemailer = require("nodemailer");

// const sendMail = async (req, res) => {
//   try {
//     let testAccount = await nodemailer.createTestAccount();

//     // connect with the smtp
//     let transporter = nodemailer.createTransport({
//       host: 'smtp.ethereal.email',
//       port: 587,
//       auth: {
//         user: 'barney63@ethereal.email',
//         pass: 'vRuCnghbqH4WhhBSFz'
//       }
//     });

//     let info = await transporter.sendMail({
//       from: '"Parveen 👻" <barney63@ethereal.email>',
//       to: "praveenmadabanvi@gmail.com",
//       subject: "Hello",
//       text: "Hello, What's up",
//     });

//     console.log("Message sent: %s", info.messageId);
    
//     // Modify the response format
//     const jsonResponse = {
//       status: 'success',
//       message: 'Email sent successfully',
//       data: {
//         messageId: info.messageId,
//         envelope: info.envelope,
//         messageId: info.messageId,
//       }
//     };

//     res.json(jsonResponse);
//     console.log(jsonResponse);
//   } catch (error) {
//     // Handle errors
//     console.error(error);
//     res.status(500).json({ status: 'error', message: 'Internal Server Error' });
//   }
// };

// module.exports = sendMail;
