const express = require('express');
const app= express()
const mailRoute = require('./routes/sendGmailRoutes.js');


app.use(express.json());

app.get('/', (req, res)=> {
  res.send('Hello World')})
app.use('/api/v1/sendMail', mailRoute)

const PORT=3000
app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)})




