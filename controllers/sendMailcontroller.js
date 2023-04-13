const express = require("express");
const app = express();
const sendGmail = require("../services/sendGmail.service");

const sendMail = async (req, res) => {
    try {
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
            // console.log({"length":readEmail.length()})
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
