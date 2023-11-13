const Mailgen = require('mailgen');
const {transporter} = require('./config');
const {senderMsg , receiversMsg} = require('./body');

const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
        name: 'Faith Adetona',
        link: 'https://faithportfolio-first.netlify.app'
    }
});

const sendingMail = async (req , res) => {

const {email, name , message} = req.body;
const {userMail , userName} = req.query;


let userMailMsg = mailGenerator.generate(senderMsg(name , message , userMail));
let receiverMailMsg = mailGenerator.generate(receiversMsg(name , email , message , userName));

let mailOptions = {
    from: 'sendspear@gmail.com',
    to: email,
    subject: 'Thanks For Reaching Out', 
    html: userMailMsg,
};

let mailOptions2 = {
    from: 'sendspear@gmail.com',
    to: userMail,
    subject: `New Message From ${name}`	,
    html: receiverMailMsg,
};

await transporter.sendMail(mailOptions2 , (err , info) => {
    if(err) {
        res.status(500).json({
            status: 'error',
            message: 'Message not sent',
            messageInfo: err,
            
        })
    } else {
        res.status(200).json({
            status: 'success',
            message: 'Message sent successfully',
            messageInfo: info,
        })
        
    }
})

await transporter.sendMail(mailOptions , (err , info) => {
    if(err) {



          } else {
        
        
    }
})

}

module.exports = {
    sendingMail,
}
