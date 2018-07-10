class AlunoController {
  constructor(cursoController) {
    this.alunos = [
      new Aluno(1, 'Felipe', cursoController.cursos[0], 'Marialva', 'PR')
    ]
    this.cursoController = cursoController
  }

  addAluno() {
    const aluno = {}
    aluno.nome = prompt('Insira o nome do aluno')
    aluno.codigo = parseInt(prompt('Insira o código'))
    aluno.cidade = prompt('Insira a cidade')
    aluno.estado = prompt('Insira o estado')
    aluno.curso = this.cursoController.findCursoMatricular()

    try {
      this.add(
        new Aluno(
          aluno.codigo,
          aluno.nome,
          aluno.curso,
          aluno.cidade,
          aluno.estado
        )
      )
    } catch (e) {
      alert(e.message)
    }
  }

  add(aluno) {
    const index = this.alunos.findIndex(i => i.codigo === aluno.codigo)

    if (index > -1) {
      throw new Error('Código em uso')
    }

    this.alunos.push(aluno)
  }

  listarAlunos() {
    console.log(this.alunos)
  }

  excluir() {
    try {
      const codigo = parseInt(prompt('Insira o código do aluno'))
      this.remove(codigo)
    } catch (e) {
      alert(e.message)
    }
  }

  remove(codigo) {
    const index = this.alunos.findIndex(i => i.codigo === codigo)

    if (index === -1) {
      throw new Error('Aluno não encontrado')
    }
    this.cursoController.desmatricular(this.alunos[index].curso.codigo)

    this.alunos.splice(index, 1)
  }

  lancarNota() {
    let notas = []
    const codigo = parseInt(prompt('Informe o codigo do aluno'))
    for (let i = 0; i < 4; i++) {
      notas[i] = parseFloat(prompt(`Informe a nota ${i + 1}`))
    }
    const falta = parseInt(prompt('Informe as faltas'))

    try {
      this.lancar(codigo, notas, falta)
    } catch (e) {
      alert(e.message)
    }
  }

  lancar(codigo, notas, falta) {
    const index = this.alunos.findIndex(i => i.codigo === codigo)

    if (index === -1) {
      throw new Error('Aluno nao encontrado')
    }

    this.alunos[index].notas = notas
    this.alunos[index].falta = falta
  }

  relatorio() {
    for (const aluno of this.alunos) {
      aluno.relatorio()
    }
  }
}
