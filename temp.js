const http = require("http");

const server = http.createServer((req, res) => {
    // Correct CORS header
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Correct writeHead usage and content-type
    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    // Correct JSON.stringify usage
    res.end(JSON.stringify({
        fact: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam minima facere ipsam beatae, placeat, aspernatur quas voluptas omnis modi vitae mollitia eaque magni molestias incidunt et ducimus. Magni maxime dolorem mollitia voluptatem nobis a ad."
    }));
});

// Correct listen usage and spelling
server.listen(80, 'localhost', () => {
    console.log("server running at http://localhost:80/");
});