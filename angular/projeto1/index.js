var app = angular.module('myApp', [])

app.controller('indexController', function($scope, produtosService) {
  $scope.produtos = []
  $scope.produto = {}
  $scope.erro = ''

  function listarProdutos() {
    produtosService.listar(function(err, data) {
      if (err) return alert(err)
      $scope.produtos = data
    })
  }

  listarProdutos()

  $scope.salvar = function() {
    $scope.erro = ''
    produtosService.salvar($scope.produto, function(err, data) {
      if (err) {
        $scope.erro = err
        return false
      }

      if ($scope.produto.id) {
        const index = $scope.produtos.findIndex(function(i) {
          return i.id === $scope.produto.id
        })

        $scope.cancelar()
        return ($scope.produtos[index] = data)
      }

      $scope.produtos.push(data)
      $scope.cancelar()
    })
  }

  $scope.cancelar = function() {
    $scope.produto = {}
    $scope.erro = ''
    $scope.exibeFormulario = false
  }

  $scope.formatarValor = function(preco) {
    return 'R$ ' + preco.toFixed(2).replace('.', ',')
  }

  $scope.excluir = function(id) {
    produtosService.remover(id, function(err, data) {
      if (err) {
        return alert(err)
      }

      const index = $scope.produtos.findIndex(function(i) {
        return i.id === id
      })

      $scope.produtos.splice(index, 1)
    })
  }

  $scope.editar = function(id) {
    produtosService.recuperar(id, function(err, data) {
      if (err) return alert(err)
      $scope.produto = data
      $scope.exibeFormulario = true
    })
  }

  $scope.totalEstoque = function() {
    if ($scope.produtos.length) {
      var total = 0
      for (var i in $scope.produtos) {
        total += $scope.produtos[i].estoque
      }

      return total
    }
  }
})
