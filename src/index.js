const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const { sendBasicEmail } = require("./services/email-service");
const jobs = require("./utils/jobs");
const TicketController = require("./controllers/ticket-controler");

const startAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.post("/api/v1/tickets", TicketController.create);

    app.listen(PORT, () => {
        console.log(`Server started on Port ${PORT}`);
        jobs();
        // sendBasicEmail(
        //     'sender',
        //     'madhusudan753@gmail.com',
        //     'Testing mailing service',
        //     'Hello this is a test mail sent to u by node mailer'
        // );
    });
};

startAndStartServer();
