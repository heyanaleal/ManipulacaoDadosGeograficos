class AuthModel {
  authenticate(email, password) {
    // Simulação de autenticação
    if (email === 'admin@exemplo.com.br' && password === 'abcd1234') {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = AuthModel;
