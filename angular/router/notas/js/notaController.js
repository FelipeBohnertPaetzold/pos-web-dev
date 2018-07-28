app.controller('notaController', function($scope, APIService, $routeParams) {
  $scope.nota = {}
  $scope.error = null

  if ($routeParams.id) {
    APIService.get($routeParams.id, function(err, data) {
      if (err) return alert(JSON.stringify(err))

      $scope.nota = data
    })
  }

  $scope.salvar = function() {
    if (!$scope.nota.titulo) return alert('Preencha o título')
    if (!$scope.nota.descricao) return alert('Preencha a descricao')

    APIService.save($scope.nota, function(err, data) {
      if (err) return alert(JSON.stringify(err))

      location.href = '/'
    })
  }
})
