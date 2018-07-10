class Editora {
  private nome: string
  private cnpj: string

  getNome(): string {
    return this.nome
  }

  setNome(nome: string) {
    this.nome = nome
  }

  getCnpj(): string {
    return this.cnpj
  }

  setCnpj(cnpj: string) {
    this.cnpj = cnpj
  }
}

class Pessoa {
  private nome: string
  private cpf: string

  getNome(): string {
    return this.nome
  }

  setNome(nome: string) {
    this.nome = nome
  }

  getCpf(): string {
    return this.cpf
  }
}

class Autor extends Pessoa {
  constructor() {
    super()
  }
}

class Cliente extends Pessoa {
  constructor() {
    super()
  }

  private debito: number

  getDebito(): number {
    return this.debito
  }

  setDebito(debito: number) {
    this.debito = debito
  }
}

class Livro {
  private nome: string
  private editora: Editora
  private autor: Autor
  private emprestado: boolean

  getNome(): string {
    return this.nome
  }

  setNome(nome: string) {
    this.nome = nome
  }

  getEditora(): Editora {
    return this.editora
  }

  setEditora(editora: Editora) {
    this.editora = editora
  }

  getAutor(): Autor {
    return this.autor
  }

  setAutor(autor: Autor) {
    this.autor = autor
  }

  getEmprestado(): boolean {
    return this.emprestado
  }
}

class Emprestimo {
  private data: string
  private cliente: Cliente
  private livros: Array<Livro> = []

  getData(): string {
    return this.data
  }

  setData(data: string) {
    this.data = data
  }

  getCliente(): Cliente {
    return this.cliente
  }

  setCliente(cliente: Cliente) {
    this.cliente = cliente
  }

  getLivros(): Array<Livro> {
    return this.livros
  }

  setLivros(livros: Array<Livro>) {
    this.livros = livros
  }

  public finalizar() {
    console.log('Devolve')
  }
}

class Devolucao {
  private emprestimo: Emprestimo
  private multa: number
  private diasAtraso: number

  getEmprestimo(): Emprestimo {
    return this.emprestimo
  }

  setEmprestimo(emprestimo: Emprestimo) {
    this.emprestimo = emprestimo
  }

  getMulta(): number {
    return this.multa
  }

  setMulta(multa: number) {
    this.multa = multa
  }

  getDiasAtraso(): number {
    return this.diasAtraso
  }

  setDiasAtraso(diasAtraso: number) {
    this.diasAtraso = diasAtraso
  }

  public finalizar() {
    console.log('Finalizar')
  }
}
