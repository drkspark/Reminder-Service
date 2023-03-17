const express = require("express");
const bodyParser = require("body-parser");
const { PORT, REMINDER_BINDING_KEY } = require("./config/serverConfig");
const EmailService = require("./services/email-service");
const jobs = require("./utils/jobs");
const TicketController = require("./controllers/ticket-controler");
const { createChannel, subscribeMessage } = require("./utils/messageQueue");


const startAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.post("/api/v1/tickets", TicketController.create);
    
    const channel = await createChannel();
    subscribeMessage(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY);
    

    app.listen(PORT, () => {
        console.log(`Server started on Port ${PORT}`);
        // jobs();
    });
};

startAndStartServer();
