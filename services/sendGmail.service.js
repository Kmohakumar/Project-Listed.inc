const express = require("express");
const app = express();
const { google } = require("googleapis");
const { OAuth2Client } = require("google-auth-library");
const fs = require("fs");
const googleAPIConstants = require("../constants/sendEmail.constants");
const { promises } = require("dns");
const { OAuth2 } = google.auth;
const gmailAuth = require("../utils/sendEmail.utils");
const { threadId } = require("worker_threads");

const gmail = gmailAuth();

class sendGmail {
  constructor() {}

  async readEmails() {
    const credentials = JSON.parse(fs.readFileSync("credentials.json"));
    console.log(credentials);

    const auth = new google.auth.OAuth2(
      credentials.web.client_id,
      credentials.web.client_secret,
      credentials.web.redirect_uris[0]
    );

    auth.setCredentials(JSON.parse(fs.readFileSync("token.json")));

    const gmail = google.gmail({ version: "v1", auth });

    const userId = "me";

    const query =
      "is:unread label:inbox -category:promotions -category:social -category:updates -subject:re:";

    try {
      const emailIds = [];
      const response = await gmail.users.messages.list({ userId, q: query });
      const messages = response.data.messages;
      if (messages && messages.length) {
        await Promise.all(
          messages.map(async (message) => {
            const messageId = message.id;
            const messageData = await gmail.users.messages.get({
              userId,
              id: messageId,
            });
            const threadId = messageData.data.threadId;
            emailIds.push( {messageId, threadId});
          })
        );
      }
      return emailIds;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async sendMail(messageId,threadIds) {
    try {
      console.log("******send Email started*********");
      const res = await gmail.users.messages.get({
        userId: "me",
        id: messageId,
        format: "metadata",
        metadataHeaders: ["Subject", "From"],
      });

      const subject = res.data.payload.headers.find(
        (header) => header.name === "Subject"
      ).value;

      const from = res.data.payload.headers.find(
        (header) => header.name === "From"
      ).value;

      const replyTo = from.match(/<(.*)>/)[1];
      // const replySubject = subject.startsWith("Re:")
      //   ? subject
      //   : "Re: ${subject}";
      const replyBody =
        "I'm on vacation right now and will resolve your issue as soon as I comeback";
      const rawMessage = [
        `From: me`,
        `To: ${replyTo}`,
        `Subject: Greetings`,
        `In-Reply-To:${messageId} `,
        `References: ${messageId}`,
        `Thread-Id:  ${threadIds}`,
        ``,
        replyBody,
      ].join("\n");
      

      const encodedMessage = Buffer.from(rawMessage)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
      await gmail.users.messages.send({
        userId: "me",
        threadId: threadIds,  
        requestBody: {
          raw: encodedMessage,
        },
      });
    } catch (error) {
      return error;
    }
  }
  async createLabel() {
    const LABEL_NAME = "VacationMails";
    try {
      const res = await gmail.users.labels.create({
        userId: "me",
        requestBody: {
          name: LABEL_NAME,
          labelListVisibility: "labelShow",
          messageListVisibility: "show",
        },
      });
      return res.data.id;
    } catch (err) {
      if (err.code === 409) {
        const res = await gmail.users.labels.list({
          userId: "me",
        });

        const label = res.data.labels.find(
          (label) => label.name === LABEL_NAME
        );
        return label.id;
      } else {
        throw err;
      }
    }
  }
  
  async addLabel(messageID, labelId) {
    try {
      const INBOXLABELID = "INBOX";
      console.log(messageID);
      console.log(labelId);
      await gmail.users.messages.modify({
        userId: "me",
        id: messageID,
        requestBody: {
          addLabelIds: [labelId],
          removeLabelIds: [INBOXLABELID],
        },
      });
    } catch (err) {
      return err;
    }
  }
}
console.log("hi")
module.exports = sendGmail;

