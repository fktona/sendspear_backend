const {sendingMail} = require('../email/transport');    

const message = async (req , res) => {
    const { name , email , message } = req.body; 
    const {userMail , userName} = req.query;
    if(!userMail || !userName) {
        return res.status(400).json({
            status: 'error',
            message: 'No user email or name',
        })
    }
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid email address',
        });
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


