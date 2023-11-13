const senderMsg = (name , message , userMail , userName) => {
    return {
        body: {
            name: name,
            intro: `Thank you for contacting ${userName}.`,
            outro: `Your message has been received by ${userMail}.` ,
            signature: 'Thanks for using SendSpear services',

        }
    };
};

const receiversMsg = (name, email, message , userName) => {
    return {
        body: {
            name: userName,
            intro: `You have a new message from ${name} with email ${email}.`,
            instructions: 'You can check the message below',
            outro: `Message: ${message}`,
            signature: 'Thanks for using SendSpear services',
            
        }
    };
};

module.exports = {
    senderMsg,
    receiversMsg,
};
