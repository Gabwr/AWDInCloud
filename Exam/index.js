const port = 3011;
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gmlopez11:Gbweorporquesi0104@cluster0.m97iqmd.mongodb.net/BD_EXAMN2?retryWrites=true&w=majority&tls=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {console.log('System connected to MongoDb Database');});

app.use(express.json());
const MicrophonesRoute = require('./routes/MicrophoneRoute');
app.use('/TechStore', MicrophonesRoute);

app.listen(port, () => {
    console.log("My Server is running -->" + port);
});