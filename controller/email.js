const {sendingMail} = require('../email/transport');    

const message = async (req , res) => {
    const { name , email , message } = req.body; 
    const {senderMail , senderName} = req.query;
    if(!senderMail || !senderName) {
        return res.status(400).json({
            status: 'error',
            message: 'No sender email',
        })
    }

    if(!name || !email || !message) {
        return res.status(400).json({
            status: 'error',
            message: 'Please fill all fields',
        })
    }   


 await sendingMail(req , res);
    
}

module.exports = {
    message,
}


