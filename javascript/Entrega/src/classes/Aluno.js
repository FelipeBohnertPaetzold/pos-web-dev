class Aluno {
  constructor(codigo, nome, curso, cidade, estado) {
    this.codigo = codigo
    this.nome = nome
    this.curso = curso
    this.cidade = cidade
    this.estado = estado
    this.falta = 0
    this.notas = []
    this.media = null
  }

  calcularMedia() {
    this.media =
      (this.notas[0] + this.notas[1] + this.notas[2] + this.notas[3]) / 4

    return this.media
  }

  verificarStatus() {
    const media = this.calcularMedia()

    if (media >= this.curso.mediaAprovacao) {
      return 'Aprovado'
    }

    return 'Reprovado'
  }

  relatorio() {
    const status = this.verificarStatus()

    console.log('-------------------------------')
    console.log('Aluno:', this.nome)
    console.log('Media:', this.media)
    console.log('Status:', status)
  }
}
