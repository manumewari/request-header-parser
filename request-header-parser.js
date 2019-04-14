const express = require("express");
const app = express();

app.get("/requestHeaderParser", (req, res) => {

    const userAgent = req.headers['user-agent'];
    const acceptLanguage = req.headers['accept-language'];
    const ipAddress = req.headers['x-forwarded-for'];
    res.send(JSON.stringify({"ipadress": ipAddress, "language": acceptLanguage, "software": userAgent}));
})

app.use((req, res, next) => {
    res.status(404).send("The URL you have entered is not valid.");
})

app.listen(3000);

