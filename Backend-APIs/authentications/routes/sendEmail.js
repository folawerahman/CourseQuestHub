const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 
        pass: 

    },
});

async function sendEmail(to, subject, html) {
    try {
        const info = await transporter.sendMail({
            from: 'info@cqh.com',
            to,
            subject,
            html,
            // text:'and this works too',
        });

        console.log('Email sent: ', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending email: ', error.message);
        return false;
    }
}

module.exports = sendEmail;
