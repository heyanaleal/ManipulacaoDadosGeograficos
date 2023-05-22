const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://postgres:123@localhost:5432/spotsat',
});

// Listar áreas
const listarArea = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT id, nome, ST_AsGeoJSON(poligono)::json as poligono FROM areas');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar as áreas.' });
  }
};

// Criar área
const criarArea = async (req, res) => {
  const { nome, poligono } = req.body;
  try {
    await pool.query('INSERT INTO areas (nome, poligono) VALUES ($1, ST_GeomFromGeoJSON($2))', [nome, JSON.stringify(poligono)]);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar a área.' });
  }
};

// Visualizar área
const visualizarArea = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT id, nome, ST_AsGeoJSON(poligono)::json as poligono FROM areas WHERE id = $1', [id]);
    if (rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao visualizar a área.' });
  }
};

// Atualizar área
const atualizarArea = async (req, res) => {
  const { id } = req.params;
  const { nome, poligono } = req.body;
  try {
    await pool.query('UPDATE areas SET nome = $1, poligono = ST_GeomFromGeoJSON($2) WHERE id = $3', [nome, JSON.stringify(poligono), id]);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a área.' });
  }
};

// Remover área
const removerArea = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM areas WHERE id = $1', [id]);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover a área.' });
  }
};

module.exports = {
  listarArea,
  criarArea,
  visualizarArea,
  atualizarArea,
  removerArea,
};
