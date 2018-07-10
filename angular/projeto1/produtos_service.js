app.service('produtosService', function($http) {
  const endpoint = 'http://localhost:3000'

  return {
    recuperar: function(id, callback) {
      $http.get(endpoint + '/produtos/' + id).then(function(res) {
        return callback(null, res.data)
      }, callback)
    },
    salvar: function(produto, callback) {
      if (!produto.nome) {
        return callback('Digite o nome do produto')
      }
      if (!produto.estoque) produto.estoque = 0
      if (!produto.preco) produto.preco = 0

      var req = {
        method: 'POST',
        url: endpoint + '/produtos',
        data: produto
      }

      if (produto.id) {
        req.method = 'PUT'
        req.url = endpoint + '/produtos/' + produto.id
      }

      return $http(req).then(function(res) {
        callback(null, res.data)
      }, callback)
    },
    listar: function(callback) {
      $http.get(endpoint + '/produtos').then(function(res) {
        callback(null, res.data)
      }, callback)
    },
    remover: function(id, callback) {
      $http.delete(endpoint + '/produtos/' + id).then(function(res) {
        callback(null, res.data)
      }, callback)
    }
  }
})
