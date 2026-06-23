import http from 'http';
import { getDataFromDb } from './database/db.js';

const PORT = 3000;

const server = http.createServer(async (req, res) => {
const destinations  = await getDataFromDb();

if (req.url === '/api' && req.method === 'GET') {

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200
    
    res.end(JSON.stringify(destinations));

}
else if (req.url.startsWith('/api/country') && req.method === 'GET') {
    
    res.setHeader('Content-Type', 'application/json');
    res.statusCode =  200
  
    const country = req.url.split('/').pop()
    console.log(country);
    // res.end(JSON.stringify(country));
}

else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404
    
    res.end(JSON.stringify({ message: 'Invalid Response' }));
}

})

server.listen(PORT, () => console.log(`Server is running in PORT: ${PORT}`));