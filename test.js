// // const msg=['email1@example.com', 'email2@example.com']
// // const msg2= msg.join(",")
// // console.log(msg2)

// const { google } = require('googleapis');
// const { OAuth2 } = google.auth;
// const { auth } = require('google-auth-library');
// const {OAuth2Client} = require('google-auth-library');
// const fs = require("fs");
// const {authenticate} = require('@google-cloud/local-auth');
// const path = require('path');




// // const credentials = JSON.parse(fs.readFileSync("credentials.json"));
// //     console.log(credentials);

// //     const auth1= new google.auth.OAuth2(
// //       credentials.web.client_id,
// //       credentials.web.client_secret,
// //       credentials.web.redirect_uris[0]
// //     );
// const SCOPES = [
//   'https://www.googleapis.com/auth/gmail.readonly',
//   'https://www.googleapis.com/auth/gmail.send',
//   'https://www.googleapis.com/auth/gmail.labels',
//   'https://mail.google.com'
// ]
// async function authenticateWithCredentials() {
//   try{
//   const auth = await authenticate({
//     keyfilePath : path.join(__dirname,'/credentials.json'),
//     scopes: SCOPES,
//   });
//   return auth;}
//   catch(err){
//     console.log(err)
//   }
// }
// let auth1=""
// authenticateWithCredentials().then((auth)=>{
//   auth1=auth
// })


// const gmail = google.gmail({ version: 'v1', auth1 });

// const app=async()=>{
//     const res = await gmail.users.messages.get({
//       userId: 'me',
//       id: '1876e72dd21c1120',
//       format: 'metadata',
//       metadataHeaders: ['Subject','From'],
//     });
    
//     const subject = res.data.payload.headers.find(
//       (header)=>header.name === 'Subject'
//     ).value;
    
//     const from = res.data.payload.headers.find(
//       (header)=>header.name === 'From'
//     ).value;
    
//     const replyTo = from.match(/<(.*)>/)[1];
//     const replySubject = subject.startsWith('Re:') ? subject : 'Re: ${subject}';
//     const replyBody = "Hi, \n\nI'm currently on vacation and will get back to you soon!";
//     const rawMessage = [
    
//     `From: me`,
//     `To: ${replyTo}`,
//     `Subject: `,
//     `In-Reply-To: 1876e72dd21c1120`,
//     `References: 1876e72dd21c1120`,
//     ``,
//     replyBody,
    
//     ].join('\n');
    
//     const encodedMessage = Buffer.from(rawMessage).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/,'');
//     await gmail.users.messages.send({
//       userId: 'me',
//       requestBody: {
//           raw: encodedMessage,
//       }
//     });
//     }
    
//     app()


















// // const express = require("express");
// // const app = express();
// // const { google } = require("googleapis");
// // const { OAuth2Client } = require("google-auth-library");
// // const fs = require("fs");
// // // const googleAPIConstants = require("../constants/sendEmail.constants");
// // const { promises } = require("dns");
// // const { OAuth2 } = google.auth;

// // async function readEmails() {
// //     const credentials = JSON.parse(fs.readFileSync("credentials.json"));
// //     console.log(credentials);

// //     const auth = new google.auth.OAuth2(
// //       credentials.web.client_id,
// //       credentials.web.client_secret,
// //       credentials.web.redirect_uris[0]
// //     );

// //     auth.setCredentials(JSON.parse(fs.readFileSync("token.json")));

// //     const gmail = google.gmail({ version: "v1", auth });

// //     const userId = "me";

// //     const query =
// //       "is:unread label:inbox -category:promotions -category:social -category:updates -subject:re:";

// //     try {
// //       const emailIds = [];
// //       const response = await gmail.users.messages.list({ userId, q: query });
// //       const messages = response.data.messages;
// //       if (messages && messages.length) {
// //         await Promise.all(
// //           messages.map(async (message) => {
// //             const messageId = message.id;
// //             const messageData = await gmail.users.messages.get({ userId, id: messageId });
// //             emailIds.push(messageId);
// //           })
// //         );
// //       }
// //       return emailIds;
// //     }
// //      catch (err) {
// //       console.error(err);
// //       return [];
// //     }
// //   }


// // const messages = readEmails().then((ids)=>{
// //     console.log(ids)
// // })
// // console.log(messages)