const Http = require("http");

const server = Http.createServer((req, res) => {

    const userAgent = req.headers['user-agent'];
    const acceptLanguage = req.headers['accept-language'];
    const ipAddress = req.headers['x-forwarded-for'];

    res.write(JSON.stringify({"ipadress": ipAddress, "language": acceptLanguage, "software": userAgent}));
    res.end();
});

server.listen(3000);


