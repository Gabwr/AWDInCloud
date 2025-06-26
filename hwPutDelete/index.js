const port = 3011;
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gmlopez11:Gbweorporquesi0104@cluster0.m97iqmd.mongodb.net/Biosigma_db?retryWrites=true&w=majority&tls=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {console.log('System connected to MongoDb Database');});

app.use(express.json());

const profileRouter = require('./routes/profileRoutes');
const userRouter = require('./routes/userRoutes');
app.use('/user', userRouter);
app.use('/profile',profileRouter);


app.listen(port, () => {
    console.log("My Server is running --> http://localhost:" + port);
});