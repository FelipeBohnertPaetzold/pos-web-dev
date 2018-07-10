const cursoController = new CursoController()
const alunoController = new AlunoController(cursoController)

describe('Inserir alunos', function() {
  it('Falha ao inserir alunos com mesmo codigo', function() {
    const aluno = new Aluno(
      1,
      'Felipe',
      cursoController.cursos[0],
      'Marialva',
      'PR'
    )
    expect(function() {
      alunoController.add(aluno)
    }).toThrow(new Error('Código em uso'))
  })
})

describe('Inserir cursos', function() {
  it('Falha ao inserir cursos com mesmo codigo', function() {
    const curso = new Curso('WebDev', 1, 7)
    expect(function() {
      cursoController.add(curso)
    }).toThrow(new Error('Codigo em uso'))
  })
})
