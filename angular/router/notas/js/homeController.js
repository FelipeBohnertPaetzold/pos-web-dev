app.controller('homeController', function($scope, APIService) {
  $scope.notas = []
  $scope.error = null

  function listar() {
    APIService.getAll(function(err, data) {
      if (err) return alert(JSON.stringify(err))

      $scope.notas = data
    })
  }

  listar()

  remover = function(id) {
    APIService.delete(id, function(err, data) {
      if (err) return alert(JSON.stringify(err))

      const index = $scope.notas.findIndex(i => i.id === id)

      $scope.notas.splice(index, 1)
    })
  }

  $scope.confirmarExcluir = function(id) {
    const resposta = confirm('Deseja excluir o item ' + id)

    if (resposta) {
      remover(id)
    }
  }

  $scope.inativar = function(id) {
    APIService.inactive(id, function(err, data) {
      if (err) return alert(JSON.stringify(err))

      listar()
    })
  }
})
