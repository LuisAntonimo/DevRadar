const { Router } = require('express'); // importa apenas o módulo de roteamento


const DevController = require('../src/controllers/DevController');
const SearchController = require('../src/controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index); // retorna listagem de DevController
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);


module.exports = routes;




// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: (GET é mais comum) req.query (filtros, ordenação, paginação, etc)
// Route Params: (PUT e DELETE '') req.params (identificar um recurso na alteração ou remoção)
// Body: (POST '') req.body (dados para a criação ou alteração de um registro)
