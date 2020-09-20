const http = require('http');

const puerto = 8080;

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    const salida = {
        nombre: 'Deme',
        edad: 26,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();

}).listen(puerto);

console.log(`Escuchando en el puerto ${puerto}`);