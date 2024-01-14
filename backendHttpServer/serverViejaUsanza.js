// importar el modulo
const http = require('http');

// metodo createServer -> crea el servidor
// req son las peticiones (lo que llega al servidor)
// res son las respuestas del servidor (lo que manda el servidor)
const server = http.createServer((req, res) => {
    // si lo que viene en la peticion, si la url es '/' (raiz)
    if (req.url === '/') {
        //responder escribiendo en la cabecera de la respuesta
        // primero el codigo de la respuesta exitosa (200) - contenido: texto plano
        // en la cabecera va la info de la respuesta (texto plano)
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hola, mundo!\n'); // mensaje que envia el servidor \n es salto de linea.
    } else if (req.url === '/acerca-de') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Acerca de: Este es un servidor HTTP corriendo en Node.JS.. \n');
    } else {
        // dar un mensaje que el recurso no se ha encontrado
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Pagina no encontrada!.\n');
    }
})

//declarar un puerto 8080, 8000, 
const port = 8080;

//método para levantar el servidor
server.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
})