const express = require('express');
const controllerProduto = require('../controllers/Produto.Controller');

const routes = express.Router();

routes.get('/List', controllerProduto.List);

routes.post('/Create', controllerProduto.Create);

routes.put('/Update', controllerProduto.Update);

routes.get('/GetONE', controllerProduto.GetOne);

routes.post('Delete', controllerProduto.Delete);

module.exports = routes;