const express = require('express');
const areaController = require('../controllers/areaController');
const router = express.Router();

// Listar áreas
router.get('/', areaController.listarArea);

// Criar área
router.post('/', areaController.criarArea);

// Visualizar área
router.get('/:id', areaController.visualizarArea);

// Atualizar área
router.put('/:id', areaController.atualizarArea);

// Remover área
router.delete('/:id', areaController.removerArea);


module.exports = router;
