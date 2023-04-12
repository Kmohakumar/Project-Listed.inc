const express = require ('express');
const router=require('express').Router();
const sendMail = require('../controllers/sendMailcontroller')

router.post("/send",sendMail);


module.exports = router