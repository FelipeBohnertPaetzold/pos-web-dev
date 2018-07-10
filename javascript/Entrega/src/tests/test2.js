const cursoController2 = new CursoController()
const alunoController2 = new AlunoController(cursoController2)

describe('Remover cursos', function() {
  it('Falha ao remover curso que tenha alunos', function() {
    expect(function() {
      cursoController2.remove(1, alunoController2)
    }).toThrow(Error('Existem alunos no curso'))
  })
})
