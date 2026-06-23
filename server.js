import http from 'http';
import { getDataFromDb } from './database/db.js';

const PORT = 3000;

const server = http.createServer(async (req, res) => {
const destinations  = getDataFromDb();

if (req.url === '/api' && req.method === 'GET') {

    res.status = 200
    res.setHeader = ('Content-Type', 'application/JSON');
    res.end(JSON.stringify(destinations));
}
else if (req.url === '/api/country' && req.method === 'GET') {

    res.status =  200
    res.setHeader = ('content-Type', 'application/JSON');
    const country = destinations.filter((destination) => 
        destination.country.toLowerCase() === destinations.country.toLowerCase()
);
    res.end(JSON.stringify(country));
}

else


    res.end('Invalid Responce');

})