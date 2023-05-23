const express = require('express');
const lugarController = require('../controllers/lugarController');
const router = express.Router();

// Listar lugares
router.get('/', lugarController.listarLugar);

// Criar lugar
router.post('/', lugarController.criarLugar);

// Visualizar lugar
router.get('/:id', lugarController.visualizarLugar);

// Atualizar lugar
router.put('/:id', lugarController.atualizarLugar);

// Remover lugar
router.delete('/:id', lugarController.removerLugar);

// Verificar se um lugar está dentro de uma área
router.get('/:lugarId/areas/:areaId', lugarController.verificarLugarEmArea);

// Listar lugares dentro de uma área
router.get('/areas/:id/lugares', lugarController.listarLugaresEmArea);

module.exports = router;
