const express = require('express');
const controllerProduto = require('../controllers/Produto.Controller');

const routes = express.Router();

routes.get('/List', controllerProduto.List);

routes.post('/Create', controllerProduto.Create);

routes.post('/Update', controllerProduto.Update);

// routes.get('/GetOne', controllerProduto.GetOne);
routes.post('/GetOne', controllerProduto.GetOne); // MUDAMOS PARA POST

routes.post('/Delete', controllerProduto.Delete);

module.exports = routes;