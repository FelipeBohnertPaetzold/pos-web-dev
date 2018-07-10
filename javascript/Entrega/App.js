const loginController = new LoginController()
const cursoController = new CursoController()
const alunoController = new AlunoController(cursoController)

let moduleSelected = ''

const login = () => {
  let checkUser = false
  let checkPassword = false

  do {
    const name = prompt('Informe o nome:')
    try {
      loginController.findUser(name)
      checkUser = true
    } catch (e) {
      alert(e.message)
    }
  } while (!checkUser)

  do {
    const password = prompt('Informe a senha:')
    try {
      loginController.checkPassword(password)
      checkPassword = true
    } catch (e) {
      alert(e.message)
    }
  } while (!checkPassword)
}

const renderHomeMenu = () => {
  const option = parseInt(
    prompt(
      'Selecione a opcão: \n1) Curso\n2) Aluno\n3)Lança nota\n4)Relatório de notas\n0)Sair'
    )
  )

  return option
}

const adicionar = () => {
  switch (moduleSelected) {
    case 'Cursos':
      cursoController.addCurso()
      break
    case 'Alunos':
      alunoController.addAluno()
      break
  }
}

const excluir = () => {
  let func = null

  switch (moduleSelected) {
    case 'Cursos':
      cursoController.excluir(alunoController)
      break
    case 'Alunos':
      alunoController.excluir()
      break
  }
}

const listar = () => {
  switch (moduleSelected) {
    case 'Cursos':
      cursoController.listarCursos()
      break
    case 'Alunos':
      alunoController.listarAlunos()
      break
  }
}

showSubMenu = () => {
  let option = null

  do {
    option = null
    option = parseInt(
      prompt(
        `Módulo selecionado: ${moduleSelected}\n1)Cadastrar\n2)Excluir\n3)Listar\n0)Voltar`
      )
    )

    switch (option) {
      case 1:
        adicionar()
        break
      case 2:
        excluir()
        break
      case 3:
        listar()
        break
    }
  } while (option !== 0)
}

const main = () => {
  let option = null

  while (option !== 0) {
    option = null
    if (!loginController.checkAuth()) {
      login()
    }

    option = renderHomeMenu()

    switch (option) {
      case 1: {
        moduleSelected = 'Cursos'
        showSubMenu()
        break
      }
      case 2: {
        moduleSelected = 'Alunos'
        showSubMenu()
        break
      }
      case 3: {
        alunoController.lancarNota()
        break
      }
      case 4: {
        alunoController.relatorio()
        break
      }
      case 0: {
        loginController.logout()
        break
      }
    }
  }
}

main()
