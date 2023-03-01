const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//routes
const studentRoute = require('./routes/studentRoute');
app.use('/student', studentRoute);

const gradeRouter = require('./routes/gradeRoute');
app.use('/grade', gradeRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//Connecting to the database
const mongoose = require('mongoose');
//synchronous connection
// mongoose.connect('mongodb://localhost:27017/studentDB', {useNewUrlParser: true}, (err) => {
//     if(!err){console.log('MongoDB connection successful.')}
//     else{console.log('Error in DB connection:' + err)}
// });

//asynchronous connection
mongoose.connect('mongodb+srv://admin:<password>@ift458.bvcjbzu.mongodb.net/demodb', {useNewUrlParser: true})
    .then(() => console.log('MongoDB connection successful'))
    .catch((err) => console.log(err));
