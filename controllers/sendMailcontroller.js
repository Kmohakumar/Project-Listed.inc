const express = require("express");
const app = express();
const sendGmail = require("../services/sendGmail.service");

const sendMail = async (req, res) => {
    try {
        setInterval(async ()=>{
            const sendEmailInstance = new sendGmail();
            const labelId = await sendEmailInstance.createLabel();
            const emailIds = await sendEmailInstance.readEmails();
            console.log("********read email started********");
            console.log(emailIds);
            console.log("*********read email ended*******");
            const length = Object.keys(emailIds).length
            if (length==0){
                res.json({"message":"No emails to send"})
            }
            else{
            // console.log({"length":readEmail.length()})
            for (let key in emailIds) {
                await sendEmailInstance.sendMail(emailIds[key].messageId,emailIds[key].threadId);
                await sendEmailInstance.addLabel(emailIds[key].messageId, labelId);
            }
            res.json({ message: "message sent" });
            } 
        }, 50000)
    } catch (error) {
    console.log(err);
    }
};

module.exports = sendMail;
