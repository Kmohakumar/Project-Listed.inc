const express = require("express");
const app = express();
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
require('dotenv').config();


function gmailAuth() {
  const oAuth2Client = new OAuth2(
    process.env.CLIENTID,
    process.env.CLIENTSECRET,
    process.env.REDIRECTURI
  );

  oAuth2Client.setCredentials({
    access_token:process.env.ACCESSTOKEN,
    refresh_token:process.env.REFRESHTOKEN,
  });

  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
  return gmail;
}

module.exports = gmailAuth;
