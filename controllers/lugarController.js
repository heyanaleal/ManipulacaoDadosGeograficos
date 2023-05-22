const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://postgres:123@localhost:5432/spotsat',
});

// Listar lugares
const listarLugar = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT id, nome, ST_AsGeoJSON(ponto)::json as ponto FROM lugares');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os lugares.' });
  }
};

// Criar lugar
const criarLugar = async (req, res) => {
  const { nome, ponto } = req.body;
  try {
    await pool.query('INSERT INTO lugares (nome, ponto) VALUES ($1, ST_GeomFromGeoJSON($2))', [nome, JSON.stringify(ponto)]);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o lugar.' });
  }
};

// Visualizar lugar
const visualizarLugar = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT id, nome, ST_AsGeoJSON(ponto)::json as ponto FROM lugares WHERE id = $1', [id]);
    if (rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao visualizar o lugar.' });
  }
};

// Atualizar lugar
const atualizarLugar = async (req, res) => {
  const { id } = req.params;
  const { nome, ponto } = req.body;
  try {
    await pool.query('UPDATE lugares SET nome = $1, ponto = ST_GeomFromGeoJSON($2) WHERE id = $3', [nome, JSON.stringify(ponto), id]);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o lugar.' });
  }
};

// Remover lugar
const removerLugar = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM lugares WHERE id = $1', [id]);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover o lugar.' });
  }
};

module.exports = {
  listarLugar,
  criarLugar,
  visualizarLugar,
  atualizarLugar,
  removerLugar,
};
