const usuarios = [
  {
    username: 'felipe',
    password: '1234'
  },
  {
    username: 'admin',
    password: '123'
  }
]

class LoginController {
  checkAuth() {
    if (this.userAuth) {
      return true
    }

    return false
  }

  findUser(name) {
    const index = usuarios.findIndex(i => i.username === name)
    if (index === -1) {
      throw new Error('Usuário inválido')
    }

    this.user = usuarios[index]
  }

  checkPassword(password) {
    if (this.user.password !== password) {
      throw new Error('Senha inválida')
    }

    this.userAuth = this.user

    return true
  }

  logout() {
    this.user = null
    this.userAuth = null
  }
}
