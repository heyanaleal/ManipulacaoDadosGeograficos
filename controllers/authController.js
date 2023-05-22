const AuthModel = require('../models/auth');

class AuthController {
  constructor() {
    this.authModel = new AuthModel();
  }

  authenticate(req, res) {
    const { email, password } = req.body;


    if (!email || !password) {
      res.status(400).json({ message: 'Formato da requisição inválido' });
      return;
    }

    const isAuthenticated = this.authModel.authenticate(email, password);

    if (isAuthenticated) {
      res.status(200).json({ message: 'Autenticado com sucesso!' });
    } else {
      res.status(401).json({ message: 'Falha ao autenticar!' });
    }
  }
}

module.exports = AuthController;
