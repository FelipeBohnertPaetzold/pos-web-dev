class CursoController {
  constructor() {
    this.cursos = [new Curso('WebDev', 1, 7)]
  }

  addCurso() {
    let curso = {}

    curso.nome = prompt('Insira o nome do curso:')
    curso.codigo = parseInt(prompt('Insira o código do curso:'))
    curso.mediaAprovacao = parseFloat(prompt('Insira a média de aprovação:'))
    let c = new Curso(curso.nome, curso.codigo, curso.mediaAprovacao)

    try {
      this.add(c)
    } catch (e) {
      alert(e.message)
    }
  }

  add(curso) {
    const index = this.cursos.findIndex(i => i.codigo === curso.codigo)

    if (index > -1) {
      throw new Error('Codigo em uso')
    }
    this.cursos.push(curso)
  }

  excluir(alunoController) {
    try {
      let codigo = parseInt(prompt('Informe o código do curso:'))
      this.remove(codigo, alunoController)
    } catch (e) {
      alert(e.message)
    }
  }

  remove(codigo, alunoController) {
    const index = this.cursos.findIndex(i => i.codigo === codigo)

    if (index === -1) {
      throw new Error('Curso não existe')
    }

    const indexAluno = alunoController.alunos.findIndex(
      i => i.curso.codigo === codigo
    )

    if (indexAluno > -1) {
      throw new Error('Existem alunos no curso')
    }

    this.cursos.splice(index, 1)
  }

  desmatricular(codigo) {
    const index = this.cursos.findIndex(i => i.codigo === codigo)
    this.cursos[index].quantidadeAlunos--
  }

  findCursoMatricular() {
    let ok = false

    while (!ok) {
      try {
        const curso = this.find(parseInt(prompt('Insira o codigo do curso')))
        curso.quantidadeAlunos++
        ok = true
        return curso
      } catch (e) {
        alert(e.message)
      }
    }
  }

  find(codigo) {
    const index = this.cursos.findIndex(i => i.codigo === codigo)

    if (index === -1) {
      throw new Error('Curso não encontrado')
    }

    return this.cursos[index]
  }

  listarCursos() {
    console.log(this.cursos)
  }
}
