const senderMsg = (name , message , senderMail , senderName) => {
    return {
        body: {
            name: name,
            intro: `Thank you for contacting ${senderName}.`,
            outro: `Your message has been received by ${senderMail}.` ,

        }
    };
};

const receiversMsg = (name, email, message , senderName) => {
    return {
        body: {
            name: senderName,
            intro: `You have a new message from ${name} with email ${email}.`,
            instructions: 'You can check the message below',
            outro: `Message: ${message}`,
        }
    };
};

module.exports = {
    senderMsg,
    receiversMsg,
};
