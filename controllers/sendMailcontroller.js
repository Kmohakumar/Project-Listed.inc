const express = require("express");
const app = express();
const sendGmail = require("../services/sendGmail.service");

const sendMail = async (req, res) => {
    try {
        // this cron job can be implimented diffrently using step function so that we can increase our performance 
        setInterval(async ()=>{
            const sendEmailInstance = new sendGmail();
            
            const emailIds = await sendEmailInstance.readEmails();
            console.log("********read email started********");
            console.log(emailIds);
            console.log("*********read email ended*******");
            const length = Object.keys(emailIds).length
            if (length==0){
                console.log("no emails to send")
            }
            else{
            for (let key in emailIds) {
                const labelId = await sendEmailInstance.createLabel();
                await sendEmailInstance.sendMail(emailIds[key].messageId,emailIds[key].threadId);
                await sendEmailInstance.addLabel(emailIds[key].messageId, labelId);
            }
            console.log("email sent")
            } 
        }, 50000)
        res.json({ message: "sendMail function has been executed"});
    } catch (error) {
    console.log(err);
    }
};

module.exports = sendMail;
