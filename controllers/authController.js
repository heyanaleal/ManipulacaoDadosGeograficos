const AuthRequest = require('../models/authModel');

const authenticate = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json('Formato da requisição inválido!');
  }

  // Verificar se as credenciais são válidas
  if (email === 'admin@exemplo.com.br' && password === 'abcd1234') {
    return res.status(200).json('Autenticado com sucesso!');
  } else {
    return res.status(401).json('Falha ao autenticar!');
  }
};

module.exports = {
  authenticate,
};
