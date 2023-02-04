const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const {sendBasicEmail} = require('./services/email-service');
const app = express();

const startAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server started on Port ${PORT}`);
        // sendBasicEmail(
        //     'sender',
        //     'madhusudan753@gmail.com',
        //     'Testing mailing service',
        //     'Hello this is a test mail sent to u by node mailer'
        // );
    });
};

startAndStartServer();
