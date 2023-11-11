const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'faithadetona@gmail.com',
        pass: 'wponvdziecpnuomd'
    }
});

module.exports = {
    transporter,
}