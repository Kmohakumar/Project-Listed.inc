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

















// const express = require("express");
// const app = express();


// // // const {google} = require('googleapis');
// // // const fs = require('fs');

// // // // Load the credentials from a file
// // // const credentials = JSON.parse(fs.readFileSync('credentials.json'));

// // // // Authenticate and create the Gmail API client
// // // const auth = new google.auth.OAuth2(
// // //   "799940999510-c76ma05lj09k12gtc3f7f9cspljteef8.apps.googleusercontent.com",
// // //   "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",
// // //   "http://localhost"
// // // );
// // // auth.setCredentials(JSON.parse(fs.readFileSync('token.json')));
// // // const gmail = google.gmail({version: 'v1', auth});

// // // // Define the user ID
// // // const userId = 'me';

// // // // Call the users.messages.list method with the 'is:unread' query
// // // gmail.users.messages.list({userId, q: 'is:unread'}, (err, res) => {
// // //   if (err) {
// // //     console.error(err);
// // //     return;
// // //   }

// // //   // Loop through the messages and print the message snippet
// // //   res.data.messages.forEach(message => {
// // //     // Call the users.messages.get method to retrieve the message content
// // //     gmail.users.messages.get({userId, id: message.id}, (err, res) => {
// // //       if (err) {
// // //         console.error(err);
// // //         return;
// // //       }
// // //       console.log(res.data.snippet);
// // //     });
// // //   });
// // // });
// // // jksjdfkjdhfkjsddddddddddddddddddddddddddddddddddd















// const { google } = require("googleapis");
// const {OAuth2Client} = require('google-auth-library');

// // // const gmail = google.gmail('v1');

// const fs = require("fs");

// // **********************************read
// // Load the credentials from a file
// const credentials = JSON.parse(fs.readFileSync("credentials.json"));
// console.log(credentials);

// const auth = new google.auth.OAuth2(
//   credentials.web.client_id,
//   credentials.web.client_secret,
//   credentials.web.redirect_uris[0]
// );

// auth.setCredentials(JSON.parse(fs.readFileSync("token.json")));
// //  OAuth2Client.setCredentials({
// //     access_token: accessToken
// //   });
// const gmail = google.gmail({ version: "v1", auth });

// // Define the user ID and message ID
// const userId = "me";
// // gmail.users.messages.list({ userId, q: 'is:unread' }, (err, res) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }
  
// // //   // Loop through the messages and print the message snippet
// //     // Call the users.messages.get method to retrieve the message content
// // let emails=res.data.messages.map( message => {
// //       const messageId = message.id;
// //       const messageData = gmail.users.messages.get({userId, id: messageId});
// //       const headers = messageData.data.payload.headers;
// //       const fromHeader = headers.find(header => header.name === 'From');
// //       const senderEmail = fromHeader.value;
      
// //       console.log(senderEmail)
// //       let sliced=senderEmail.split("<")[1]
// //       console.log(sliced.replace(">",""));
// //     });
// // console.log(emails)
// //   });

// // async function getUnrepliedMessages(auth){
// //   // const gmail = google.gmail({version:'v1',auth});
// //   const res = await gmail.users.messages.list({
// //       userid: 'me',
// //       q: '-in:chats -from:me -has:userlabels'
// //   });
// //   return res.data.messages || [];
// // }

// // let appp = getUnrepliedMessages()
// // console.log("hi")
// // console.log(appp)
// // gmail.users.labels.list({ userId }, (err, res) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }

// //   // Print the label IDs
// //   res.data.labels.forEach(label => {
// //     console.log(label.id);
// //   });
// // });

// // let emails=[]

// const query = 'is:unread label:inbox -category:promotions -category:social -category:updates -subject:re:';


// // gmail.users.messages.list({userId, q: query}, async (err, res) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }

// //   // Loop through the messages and get the sender email
// //   if (res.data.messages && res.data.messages.length) {
// //     await Promise.all(res.data.messages.map(async message => {
// //       const messageId = message.id;
// //       console.log(messageId)
// //       const messageData = await gmail.users.messages.get({userId, id: messageId});
// //       const headers = messageData.data.payload.headers;
// //       const fromHeader = headers.find(header => header.name === 'From');
// //       const senderEmail = fromHeader.value;
// //       let sliced = senderEmail.split("<")[1];
// //       emails.push(sliced.replace(">",""));
// //     }));
// //   } else {
// //     console.log('No unreplied messages found.');
// //   }


// //   console.log(emails);
// // });

// async function getMessageIds(userId, query) {
//   const emails = [];
//   const response = await gmail.users.messages.list({ userId, q: query });
//   const messages = response.data.messages;
//   if (messages && messages.length) {
//     await Promise.all(
//       messages.map(async (message) => {
//         const messageId = message.id;
//         const messageData = await gmail.users.messages.get({ userId, id: messageId });
//         emails.push(messageId);
//       })
//     );
//   }
//   return emails;
// }

// getMessageIds(userId, query).then((ids) => {
//   console.log(ids);
// });


// gmail.users.labels.list({ userId }, (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   // Print the label IDs
//   res.data.labels.forEach(label => {
//     console.log(label.id);
//   });
// });


















// const {authenticate} = require('@google-cloud/local-auth');
// const {google} = require('googleapis');
// const fs = require('fs');
// const {OAuth2Client} = require('google-auth-library');




// const SCOPES = [
//   'https://www.googleapis.com/auth/gmail.readonly',
//   'https://www.googleapis.com/auth/gmail.send',
//   'https://www.googleapis.com/auth/gmail.labels',
//   'https://mail.google.com'
// ]



// // const auth = await authenticate({
// //   keyfilePath : path.join(__dirname,'/crediants.json'),
// //   scopes: SCOPES,
// // });
// // const credentials = fs.readFile('/credentials.json');
// // console.log(credentials)

// const credentials = JSON.parse(fs.readFileSync("credentials.json"));
// console.log(credentials)
// const auth = new google.auth.OAuth2(
//   credentials.web.client_id,
//   credentials.web.client_secret,
//   credentials.web.redirect_uris[0]
// );

// const gmail = google.gmail({version:'v1',auth});

// const LABEL_NAME = 'Vacation';



// // async function getUnrepliedMessages(auth){
// //   // const gmail = google.gmail({version:'v1',auth});
// //   const res = await gmail.users.messages.list({
// //       userid: 'me',
// //       q: '-in:chats -from:me -has:userlabels'
// //   });
// //   return res.data.messages || [];
// // }

// const userId="me"
// const query = 'is:label:inbox is:unread';
// async function getMessageIds(userId, query) {
//   const emails = [];
//   const response = await gmail.users.messages.list({ userId, q: query });
//   const messages = response.data.messages;
//   if (messages && messages.length) {
//     await Promise.all(
//       messages.map(async (message) => {
//         const messageId = message.id;
//         const messageData = await gmail.users.messages.get({ userId, id: messageId });
//         emails.push(messageId);
//       })
//     );
//   }
//   return emails;
// }
// getMessageIds(userId, query).then((ids) => {
//   console.log(ids);
// });

// async function func(){
//   let message=await getUnrepliedMessages()
//   console.log(message)
// }

// func()















// // /*********readddddddddddddddddddddddddddddddddddddd */

// // // ***********read2 */
// // // const messageId = '1876e6d592f5ca99'

// // // const requestBody = {
// // //     message: {
// // //       threadId: messageId,
// // //       replyToMessageId: messageId,
// // //       labelIds: ['SENT'],
// // //       raw: Buffer.from(
// // //         `To: recipient@example.com\r\n` +
// // //         `Subject: Your email subject here\r\n\r\n` +
// // //         `Your reply message here`
// // //       ).toString('base64')
// // //     }
// // //   };

// // //   // Call the Gmail API to create the draft message
// // //   gmail.users.drafts.create({
// // //     userId: userId,
// // //     requestBody: requestBody
// // //   }, (err, res) => {
// // //     if (err) {
// // //       console.error(err);
// // //       return;
// // //     }
// // //     console.log(`Draft message created: ${res.data.id}`);
// // //   });

// // // const {google} = require('googleapis');

// // // // Set up the OAuth2 client credentials
// // // const clientId = '799940999510-tid92h86fsvg8of1f4lpqqdgnipggv92.apps.googleusercontent.com';
// // // const clientSecret = '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';
// // // const refreshToken = '1//0g9nFumOAhELmCgYIARAAGBASNwF-L9Ir7xX8dZYMN3Lm13dT3vPvIMQOqINE7SaFbIwfjWRtzr-NTUg8zMuPHt1eYbj5XzcGVOs';

// // // // Set up the OAuth2 client
// // // const oauth2Client = new google.auth.OAuth2(
// // //   clientId,
// // //   clientSecret
// // // );

// // // // Set the refresh token on the OAuth2 client
// // // oauth2Client.setCredentials({
// // //   refresh_token: refreshToken
// // // });

// // // // Create a new instance of the Gmail API client
// // // const gmail = google.gmail({version: 'v1', auth: oauth2Client});

// // // // Create the message
// // // const message = "To: recipient@example.com\r\n" +
// // //                 "Subject: Test Subject\r\n\r\n" +
// // //                 "This is a test email sent via the Gmail API.";

// // // // Encode the message as base64
// // // const encodedMessage = Buffer.from(message)
// // //                           .toString('base64')
// // //                           .replace(/\+/g, '-')
// // //                           .replace(/\//g, '_')
// // //                           .replace(/=+$/, '');

// // // // Send the message
// // // gmail.users.messages.send({
// // //   userId: 'me',
// // //   requestBody: {
// // //     raw: encodedMessage
// // //   }
// // // }, (err, res) => {
// // //   if (err) return console.log(`The API returned an error: ${err}`);
// // //   console.log('The message was sent successfully:', res.data);
// // // });

// // // ******************access token
// // const {google} = require('googleapis');
// // const {OAuth2Client} = require('google-auth-library');
// // const {authenticate} = require('@google-cloud/local-auth');
// // const path = require('path');
// // const { read } = require('fs');

// // const CLIENT_ID = '799940999510-tid92h86fsvg8of1f4lpqqdgnipggv92.apps.googleusercontent.com';
// // const CLIENT_SECRET = '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';
// // const REFRESH_TOKEN = '1//0g9nFumOAhELmCgYIARAAGBASNwF-L9Ir7xX8dZYMN3Lm13dT3vPvIMQOqINE7SaFbIwfjWRtzr-NTUg8zMuPHt1eYbj5XzcGVOs';
// // const SCOPES = [
// //     'https://www.googleapis.com/auth/gmail.readonly',
// //     'https://www.googleapis.com/auth/gmail.send',
// //     'https://www.googleapis.com/auth/gmail.labels',
// //     'https://mail.google.com'
// // ]

// // const auth = new OAuth2Client(CLIENT_ID, CLIENT_SECRET);
// // auth.setCredentials({refresh_token: REFRESH_TOKEN});

// // auth.on('tokens', (tokens) => {
// //   if (tokens.refresh_token) {
// //     // Store the refresh token in your database for future use
// //     console.log('Got a new refresh token: ', tokens.refresh_token);
// //   }
// //   console.log('Got an access token: ', tokens.access_token);
// // });

// // const gmail = google.gmail({version: 'v1', auth});

// // const message = "To: mohankcvi05@gmail.com\r\n" +
// //                 "Subject: Test Subject\r\n\r\n" +
// //                 "This is a test email sent via the Gmail API.";

// // const encodedMessage = Buffer.from(message)
// //                           .toString('base64')
// //                           .replace(/\+/g, '-')
// //                           .replace(/\//g, '_')
// //                           .replace(/=+$/, '');

// // gmail.users.messages.send({
// //   userId: 'me',
// //   requestBody: {
// //     raw: encodedMessage,
// //   },
// // }, (err, res) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }
// //   console.log(res.data);
// // });

// // const {google} = require('googleapis');
// // const OAuth2 = google.auth.OAuth2;

// // // Replace with your own OAuth 2.0 client ID and client secret
// // const CLIENT_ID = '799940999510-tid92h86fsvg8of1f4lpqqdgnipggv92.apps.googleusercontent.com';
// // const CLIENT_SECRET = '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';

// // // Replace with the redirect URI registered for your OAuth 2.0 client ID
// // const REDIRECT_URI = 'http://localhost:3000/oauth2callback';

// // // Replace with the email address you want to send the email message from
// // const FROM_EMAIL_ADDRESS = 'listedmk@gmail.com';

// // // Replace with the email address you want to send the email message to
// // const TO_EMAIL_ADDRESS = 'mohankcvi05@gmail.com';

// // // Create a new OAuth2 client
// // const oauth2Client = new OAuth2(
// //   CLIENT_ID,
// //   CLIENT_SECRET,
// //   REDIRECT_URI
// // );

// // // Replace with the access token and refresh token you obtained
// // const ACCESS_TOKEN = 'ya29.a0Ael9sCMW74nLFC9FQ6AVs07G5g_9ft8MdJjGrcQOPYskpMYXanIEBEzl0V70Ha1iMpS6AbSuPK2dKRfFXcHB6Tfb9DopgNyhjnbZNQxbLcI88i8GBRuxQRHpCXFHIwBXqqcjOy1nxVHtq_43_T79uXFnfzZnPUciaCgYKAYkSARASFQF4udJh5lR_thiAkI2FRUzZy26dlQ0167';
// // const REFRESH_TOKEN = '1//0g9nFumOAhELmCgYIARAAGBASNwF-L9Ir7xX8dZYMN3Lm13dT3vPvIMQOqINE7SaFbIwfjWRtzr-NTUg8zMuPHt1eYbj5XzcGVOs';

// // oauth2Client.setCredentials({
// //   access_token: ACCESS_TOKEN,
// //   refresh_token: REFRESH_TOKEN
// // });

// // // Create a new Gmail API client using the OAuth2 client
// // const gmail = google.gmail({version: 'v1', auth: oauth2Client});

// // // Create a new email message
// // const message = [
// //   'From: ' + FROM_EMAIL_ADDRESS,
// //   'To: ' + TO_EMAIL_ADDRESS,
// // //   'Subject: Test Subject',
// // //   '',
// // //   'Test body'
// // // ].join('\n');

// // // const encodedMessage = Buffer.from(message).toString('base64');

// // // // Send the email message using the Gmail API
// // // gmail.users.messages.send({
// // //   userId: 'me',
// // //   resource: {
// // //     raw: encodedMessage
// // //   }
// // // }, (err, res) => {
// // //   if (err) {
// // //     console.log('The API returned an error: ' + err);
// // //     return;
// // //   }
// // //   console.log('Message sent:', res.data);
// // // });




// // ///jfkshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh



// // // const { google } = require("googleapis");
// // // const { OAuth2 } = google.auth;
// // // const {OAuth2Client} = require('google-auth-library');
// // // const {google} = require('googleapis');
// // // const {OAuth2Client} = require('google-auth-library');
// // // const {authenticate} = require('@google-cloud/local-auth');
// // // const path = require('path');
// // // const { read } = require('fs');

// // // const CLIENT_ID = '799940999510-tid92h86fsvg8of1f4lpqqdgnipggv92.apps.googleusercontent.com';
// // // const CLIENT_SECRET = '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';
// // // const REFRESH_TOKEN = '1//0g9nFumOAhELmCgYIARAAGBASNwF-L9Ir7xX8dZYMN3Lm13dT3vPvIMQOqINE7SaFbIwfjWRtzr-NTUg8zMuPHt1eYbj5XzcGVOs';
// // // const SCOPES = [
// // //     'https://www.googleapis.com/auth/gmail.readonly',
// // //     'https://www.googleapis.com/auth/gmail.send',
// // //     'https://www.googleapis.com/auth/gmail.labels',
// // //     'https://mail.google.com'
// // // ]

// // // const auth = new OAuth2Client(CLIENT_ID, CLIENT_SECRET);
// // // auth.setCredentials({refresh_token: REFRESH_TOKEN});

// // // auth.on('tokens', (tokens) => {
// // //   if (tokens.refresh_token) {
// // //     // Store the refresh token in your database for future use
// // //     console.log('Got a new refresh token: ', tokens.refresh_token);
// // //   }
// // //   console.log('Got an access token: ', tokens.access_token);
// // // });


// // // const oAuth2Client = new OAuth2(
// // //   "799940999510-c76ma05lj09k12gtc3f7f9cspljteef8.apps.googleusercontent.com",
// // //   "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",
// // //   "http://localhost"
// // // );

// // // const CLIENT_ID = '799940999510-tid92h86fsvg8of1f4lpqqdgnipggv92.apps.googleusercontent.com';
// // // const CLIENT_SECRET = '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';
// // // const REFRESH_TOKEN = '1//0g9nFumOAhELmCgYIARAAGBASNwF-L9Ir7xX8dZYMN3Lm13dT3vPvIMQOqINE7SaFbIwfjWRtzr-NTUg8zMuPHt1eYbj5XzcGVOs';
// // // const SCOPES = [
// // //     'https://www.googleapis.com/auth/gmail.readonly',
// // //     'https://www.googleapis.com/auth/gmail.send',
// // //     'https://www.googleapis.com/auth/gmail.labels',
// // //     'https://mail.google.com'
// // // ]

// // // const auth = new OAuth2Client(CLIENT_ID, CLIENT_SECRET);
// // // auth.setCredentials({refresh_token: REFRESH_TOKEN});
// // // let authToken=""
// // // auth.on('tokens', (tokens) => {
// // //   if (tokens.refresh_token) {
// // //     // Store the refresh token in your database for future use
// // //     authToken=tokens.refresh_token
// // //     console.log('Got a new refresh token: ', tokens.refresh_token);
// // //   }
// // //   console.log('Got an access token: ', tokens.access_token);
// // // });
// // // console.log(`"hi"${authToken}`)

// // // oAuth2Client.setCredentials({
// // //   access_token:
// // //     "ya29.a0Ael9sCOqkeO4UP57UYAlGG0wpw3IKorxguMSVXxiFSTdz0xJ2e1YC2k8M-Dkfm759jm_MxGUqZnLLjl_1bVq9x9ZH5sQEF_KznLoUFBZwOMjb3tvxqdSX9a0X2uKUd2pWnJ--cs2KXHScRB_Rk5EA6r6BoXyi77aaCgYKAUISARASFQF4udJhpFjbU-LwLKwEFqMvlWXQ6g0167",
// // //   refresh_token:
// // //     "1//04fuF0dlfbOgUCgYIARAAGAQSNwF-L9IroCIG-G-ZMicP63EZ6R3bkYZ2wlnkwX6qplLkZxPqV3ddklqHhVh446F_XYcyDNTg1uM",
// // // });

// // // const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

// // // const message = [
// // //   "From: listedmk@gmail.com",
// // //   "To: mohankcvi05@gmail.com",
// // //   "Subject: Test Email",
// // //   "Content-Type: text/html; charset=utf-8",
// // //   "",
// // //   "Hello, world!",
// // // ].join("\n");
// // // LABEL=" "
// // // async function createLabel() {
// // //   try {
// // //     const res = await gmail.users.labels.create({
// // //       userId: "me",
// // //       requestBody: {
// // //         name: "Vacation",
// // //         labelListVisibility: "labelShow",
// // //         messageListVisibility: "show",
// // //       },
// // //     });

// // //     return res.data.id;
// // //   } catch (err) {
// // //     if (err.code === 409) {
// // //       const res = await gmail.users.labels.list({
// // //         userId: "me",
// // //       });

// // //       const label = res.data.labels.find((label) => label.name === "Vacation");
// // //       return label.id;
// // //     } else {
// // //       throw err;
// // //     }
// // //   }
// // // }

// // // // async function ass(){
// // // //     LABELID=await createLabel
// // // //     LABEL=LABELID 

// // // // }


// // // ass()


// // // // const LABEL = createLabel()
// // // // console.log("hi")
// // // // console.log(LABEL)

// // // const encodedMessage = Buffer.from(message)
// // //   .toString("base64")
// // //   .replace(/\+/g, "-")
// // //   .replace(/\//g, "_")
// // //   .replace(/=+$/, "");
// // // console.log(encodedMessage);
// // // // console.log(userId)
// // // let ID = "";
// // // // async function create() {
// // // //   gmail.users.messages.send(
// // // //     {
// // // //       userId: "me",
// // // //       //   id:encodedMessage.id,
// // // //       requestBody: {
// // // //         raw: encodedMessage,
// // // //         addLabelIds: ["Vacaymode"],
// // // //       },
// // // //     },
// // // //     (err, res) => {
// // // //       if (err) return console.log("The API returned an error: " + err);
// // // //       //   ID= res.data
// // // //       //   console.log(res.data);
// // // //       return Promise.resolve(res.data);
// // // //     }
// // // //   );
// // // // }

// // // async function create() {
// // //     return new Promise((resolve, reject) => {
// // //       gmail.users.messages.send(
// // //         {
// // //           userId: "me",
// // //           requestBody: {
// // //             raw: encodedMessage,
// // //             addLabelIds: ["Vacaymode"],
// // //           },
// // //         },
// // //         (err, res) => {
// // //           if (err) return reject(err);
// // //           resolve(res.data);
// // //         }
// // //       );
// // //     });
// // //   }


// // //   async function func() {
// // //     const IDS = await create();
// // //     if (!IDS) {
// // //       console.log("IDS is undefined");
// // //       return;
// // //     }
// // //     console.log(IDS.id);
// // //     await gmail.users.messages.modify({
// // //         userId: 'me',
// // //         id: IDS.id,
// // //         requestBody:{
// // //             addLabelIds: [LABEL],
// // //             removeLabelIds: ['SENT'],
// // //         },
// // //     });
// // //   }
// // // async function func() {
// // //   const IDS = await create();
// // //   // console.log(IDS)
// // //   console.log(IDS);
// //   // const gmail = google.gmail({version:'v1',auth});
// //   // await gmail.users.messages.modify({
// //   //     userId: 'me',
// //   //     id: ID.id,
// //   //     requestBody:{
// //   //         addLabelIds: ["Vacatoin"],
// //   //         removeLabelIds: ["SENT"],
// //   //     },
// //   // });
// // // }

// // // console.log(ID);

// // func();
// // // console.log(IDS)
// // // console.log("hi")
// // // console.log(ID)
// // // const LABEL= createLabel()
// // // console.log(LABEL)

// // // async function addLabel(auth,message){
// // //     const gmail = google.gmail({version:'v1',auth});
// // //     await gmail.users.messages.modify({
// // //         userId: 'me',
// // //         id: ID,
// // //         requestBody:{
// // //             addLabelIds: [LABEL],
// // //             removeLabelIds: ["SENT"],
// // //         },
// // //     });
// // // }

// // // addLabel()


// // //dasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa





















// // // const axios = require('axios');

// // // const tokenEndpoint = 'https://authorization-server.com/oauth/token';

// // // const clientId = '799940999510-tid92h86fsvg8of1f4lpqqdgnipggv92.apps.googleusercontent.com';
// // // const clientSecret = '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';
// // // const refreshToken = 'http://localhost:3000/oauth2callback';

// // // axios.post(tokenEndpoint, {
// // //   grant_type: 'refresh_token',
// // //   refresh_token: refreshToken,
// // //   client_id: clientId,
// // //   client_secret: clientSecret,
// // // })
// // // .then((response) => {
// // //   const accessToken = response.data.access_token;
// // //   console.log(`Access token: ${accessToken}`);
// // // })
// // // .catch((error) => {
// // //   console.error(error);
// // // });







// // // const {google} = require('googleapis');
// // // const auth = new google.auth.OAuth2(
// // //     '799940999510-c76ma05lj09k12gtc3f7f9cspljteef8.apps.googleusercontent.com',
// // //   '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',
// // //   'http://localhost'
// // // );
// // // const gmail = google.gmail({version: 'v1', auth});

// // // const messageId = '187708e4019b45af';
// // // const userId = 'me';

// // // gmail.users.messages.get({
// // //   userId,
// // //   id: messageId,
// // // }, (err, res) => {
// // //   if (err) return console.log('The API returned an error: ' + err);
  
// // //   const labelIds = res.data.labelIds;
// // //   console.log(`The label IDs for message ${messageId} are: ${labelIds.join(', ')}`);
// // // });















// const { google } = require('googleapis');
// const { OAuth2 } = google.auth;
// const { auth } = require('google-auth-library');
// const {OAuth2Client} = require('google-auth-library');
// const fs = require("fs");
// const { authenticate } = require('@google-cloud/local-auth');


// const credentials = JSON.parse(fs.readFileSync("credentials.json"));
//     console.log(credentials);

    // const auth1= new google.auth.OAuth2(
    //   credentials.web.client_id,
    //   credentials.web.client_secret,
    //   credentials.web.redirect_uris[0]
    // );
// // const SCOPES = [
// //   'https://www.googleapis.com/auth/gmail.readonly',
// //   'https://www.googleapis.com/auth/gmail.send',
// //   'https://www.googleapis.com/auth/gmail.labels',
// //   'https://mail.google.com'
// // ]
// // async function authenticateWithCredentials() {
// //   try{
// //   const auth = await authenticate({
// //     keyfilePath : path.join(__dirname,'/credentials.json'),
// //     scopes: SCOPES,
// //   });
// //   return auth;}
// //   catch(err){
// //     console.log(err)
// //   }
// // }
// // let auth1=""
// // authenticateWithCredentials().then((auth)=>{
// //   auth1=auth
// // })












// const oAuth2Client = new OAuth2(
//   "799940999510-c76ma05lj09k12gtc3f7f9cspljteef8.apps.googleusercontent.com",
//   "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",
//   "http://localhost"
// );





// oAuth2Client.setCredentials({
//   access_token: 'ya29.a0Ael9sCPaBSeWjxGpqH16ySNrHGBdcehOLamdwJmv80RJWhXZa_e-UAH077LU07FPaizk09MjeTeg4mmiMJVrB6SMk4ljEc6mc21R291e7XVYezggsgRBuf4aK3DW0x6BhzJLG0O0Hn4wm7ziJqxDMHKqauXWvrYaCgYKAdASARASFQF4udJhVL5YVRz57BB6kC_vdLlJIQ0166',
//   refresh_token: "1//04fuF0dlfbOgUCgYIARAAGAQSNwF-L9IroCIG-G-ZMicP63EZ6R3bkYZ2wlnkwX6qplLkZxPqV3ddklqHhVh446F_XYcyDNTg1uM"
// });

// const gmail = google.gmail({ version: 'v1', auth:oAuth2Client });



// const message = [
//   'From: listedmk@gmail.com',
//   'To: mohankcvi05@gmail.com, mohankcvi@gmail.com',
//   'Subject: TestsssssssssssMMMMMMMMMMMMMMM Email',
//   'Content-Type: text/html; charset=utf-8',
//   '',
//   'Hello, world!'
// ].join('\n');

// const encodedMessage = Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
// const userId="me"

// LABEL=" "
// async function createLabel() {
//   try {
//     const res = await gmail.users.labels.create({
//       userId: "me",
//       requestBody: {
//         name: "Vacation",
//         labelListVisibility: "labelShow",
//         messageListVisibility: "show",
//       },
//     });

//     return res.data.id;
//   } catch (err) {
//     if (err.code === 409) {
//       const res = await gmail.users.labels.list({
//         userId: "me",
//       });

//       const label = res.data.labels.find((label) => label.name === "Vacation");
//       return label.id;
//     } else {
//       throw err;
//     }
//   }
// }


// var LABELSENT=""

// gmail.users.labels.list({ userId }, (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   // Print the label IDs
//   res.data.labels.forEach(label => {
//     if (label.name=="INBOX"){
//         LABELSENT=label.id
//         console.log({"mohansss":LABELSENT})
//         console.log(label.id)
//         // console.log(label.id)
//         console.log("hi")
//     }
//     // console.log(label.id);
//   });
// });

// // console.log(LABELSENT)

// async function ass(){
//     LABELID=await createLabel()
//     LABEL=LABELID 

// }

// ass()

// async function create() {
//     return new Promise((resolve, reject) => {
//       gmail.users.messages.send(
//         {
//           userId: "me",
//           requestBody: {
//             raw: encodedMessage,
//             addLabelIds: ["Vacaymode"],
//           },
//         },
//         (err, res) => {
//           if (err) return reject(err);
//           resolve(res.data);
//         }
//       );
//     });
//   }
// console.log({"hi":LABELSENT,"hello":"Mohan"})
// // const LABEL1="18771f13493bec0e"
// async function func() {
//     const IDS = await create();
//     if (!IDS) {
//       console.log("IDS is undefined");
//       return;
//     }
//     console.log(IDS.id);
//     await gmail.users.messages.modify({
//         userId: 'me',
//         id: IDS.id,
//         requestBody:{
//             addLabelIds: [LABEL],
//             removeLabelIds:[LABELSENT]
//         },
//     });
//   }
// func()

// const app=async()=>{
// const res = await gmail.users.messages.get({
//   userId: 'me',
//   id: '1876e72dd21c1120',
//   format: 'metadata',
//   metadataHeaders: ['Subject','From'],
// });

// const subject = res.data.payload.headers.find(
//   (header)=>header.name === 'Subject'
// ).value;

// const from = res.data.payload.headers.find(
//   (header)=>header.name === 'From'
// ).value;

// const replyTo = from.match(/<(.*)>/)[1];
// const replySubject = subject.startsWith('Re:') ? subject : 'Re: ${subject}';
// const replyBody = "Hi, \n\nI'm currently on vacation and will get back to you soon!";
// const rawMessage = [

// `From: me`,
// `To: ${replyTo}`,
// `Subject: `,
// `In-Reply-To: 1876e72dd21c1120`,
// `References: 1876e72dd21c1120`,
// ``,
// replyBody,

// ].join('\n');

// const encodedMessage = Buffer.from(rawMessage).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/,'');
// await gmail.users.messages.send({
//   userId: 'me',
//   requestBody: {
//       raw: encodedMessage,
//   }
// });
// }

// app()


















const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const { auth } = require('google-auth-library');
const {OAuth2Client} = require('google-auth-library');
const fs = require("fs");
const {authenticate} = require('@google-cloud/local-auth');


const oAuth2Client = new OAuth2(
  "799940999510-c76ma05lj09k12gtc3f7f9cspljteef8.apps.googleusercontent.com",
  "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",
  "http://localhost"
);

const SCOPES = [
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/gmail.labels',
  'https://mail.google.com'
]
async function authenticate1(){
    try{
const cred = await fs.readFile("credentials.json")
const auth1= await authenticate(
    {
        keyfilePath:path.join(__dirname, "credentials.json"),
        scopes:SCOPES
    }
)
const gmail = google.gmail({ version: "v1", auth: auth1 });
return gmail}
catch(err){
    console.log(err)
}
}
let gmail=authenticate1()
console.log(gmail)


async function loadCredentials(){
    const filepath = path.JSON(process.cwd(),"./credentials.json")
    const content= await fdatasync.readFile(filepath,{encoding:"utf-8"});
    return JSON.parse(content)
}
// oAuth2Client.setCredentials({
//   access_token:
//     "ya29.a0Ael9sCNMCSAYHp-gYWNu5tB-e4C7Pxmup7tv8wrf2sbXSnUILO71keE63xipx3qbBhonDef08UA1i9m6yZ3xQsQqIt4UMme8TqC03nwFKGlEhHJsAZJULdWRvW1Pjb1cqMcvts-CBLz_tB9PlBfbgD-cCAImWMsaCgYKATcSARASFQF4udJhSl7-zaM7uWQghAqY7-Nl0A0166",
//   refresh_token:
//     "1//04fuF0dlfbOgUCgYIARAAGAQSNwF-L9IroCIG-G-ZMicP63EZ6R3bkYZ2wlnkwX6qplLkZxPqV3ddklqHhVh446F_XYcyDNTg1uM",
// });

// const oAuth2Client = new OAuth2(
//     "799940999510-tid92h86fsvg8of1f4lpqqdgnipggv92.apps.googleusercontent.com",
//     "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",
//     "http://localhost:3000/oauth2callback"
//   );
  
//   oAuth2Client.setCredentials({
//     access_token:
//       "ya29.a0Ael9sCM_zuvtHJXv1sMQd7hCycT5TxuPt3a1J0rWpgHydJb9mUOUHRejenSlCwUtALIDrokW5Cqd3zEoBpoE_Gt9FvrRHBeDMVXyo0izLAu_BJw-2sc2Iw2N904k4RvOoVGO4rcqxIXisgwLdk3ad1qOJt3OJl0aCgYKAdkSARASFQF4udJhzOAXeeuUH6syq0epYfMhqg0166",
//     refresh_token:
//       "1//04yy_4bj787O4CgYIARAAGAQSNwF-L9IrQ1GGFavdrpmLyoBqcokvAExZZlq2mRMqF3oVwRiE6mNUvFx7HLL47QdHFKdo7NEK4ZQ",
//   });


// async function generateToken(code){
//     const {tokens}= await oAuth2Client.getAccessToken(code)
//     return tokens
// }

// async function generate(){
//     const tokens = await generateToken("authorization-code");
// console.log(tokens.access_token)
// console.log(tokens.refresh_token)
// }

// generate()




const message = [
  "From: listedmk@gmail.com",
  "To: mohankcvi05@gmail.com, mohankcvi@gmail.com",
  "Subject: TestsssssssssssMMMMMMMMMMMMMMM Email",
  "Content-Type: text/html; charset=utf-8",
  "",
  "Hello, world!",
].join("\n");

const encodedMessage = Buffer.from(message)
  .toString("base64")
  .replace(/\+/g, "-")
  .replace(/\//g, "_")
  .replace(/=+$/, "");
const userId = "me";

// LABEL = " ";
// async function createLabel() {
//   try {
//     const res = await gmail.users.labels.create({
//       userId: "me",
//       requestBody: {
//         name: "Vacation",
//         labelListVisibility: "labelShow",
//         messageListVisibility: "show",
//       },
//     });

//     return res.data.id;
//   } catch (err) {
//     if (err.code === 409) {
//       const res = await gmail.users.labels.list({
//         userId: "me",
//       });

//       const label = res.data.labels.find(
//         (label) => label.name === "Vacation"
//       );
//       return label.id;
//     } else {
//       throw err;
//     }
//   }
// }

// let LABELSENT = "";

// gmail.users.labels.list({ userId }, (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   // Print the label IDs
//   res.data.labels.forEach((label) => {
//     if (label.name == "INBOX") {
//       LABELSENT = label.id;
//       console.log(label.id);
//       console.log("hi");
//     }
//     // console.log(label.id);
//   });
// });

// console.log(LABELSENT);

// async function ass() {
//   LABELID = await createLabel();
//   LABEL = LABELID;
// }

// ass();

async function create() {
  return new Promise((resolve, reject) => {
    gmail.users.messages.send(
      {
        userId: "me",
        requestBody: {
          raw: encodedMessage,
        //   addLabelIds: ["Vacaymode"],
        },
      },
      (err, res) => {
        if (err) return reject(err);
        resolve(res.data);
      }
    );
  });
}
// console.log(LABEL)
async function func() {
  const IDS = await create();
  if (!IDS) {
    console.log("IDS is undefined");
    return;
  }
  console.log(IDS.id);
//   await gmail.users.messages.modify({
//     userId: "me",
//     id: IDS.id,
//     requestBody: {
//       addLabelIds: [LABEL],
//       removeLabelIds: [LABELSENT],
//     },
//   });
}
func();