app.controller('postsController', function($scope, postsService) {
  $scope.post = {}
  $scope.posts = []

  $scope.salvar = function() {
    postsService.salvar($scope.post, function(err, data) {
      if (err) alert(err)

      if ($scope.post.id) {
        const index = $scope.posts.findIndex(function(i) {
          return i.id === $scope.post.id
        })
        $scope.post = {}

        return ($scope.posts[index] = data)
      }
      $scope.post = {}

      $scope.posts.push(data)
    })
  }

  $scope.editar = function(id) {
    postsService.recuperar(id, function(err, data) {
      if (err) return alert(err)
      $scope.post = data
    })
  }

  $scope.remover = function(id) {
    postsService.remover(id, function(err, data) {
      if (err) return alert(err)
      const index = $scope.posts.findIndex(function(i) {
        return i.id === id
      })

      $scope.posts.splice(index, 1)
    })
  }

  $scope.listar = function() {
    postsService.listar(function(err, data) {
      if (err) return alert(err)
      $scope.posts = data
    })
  }

  $scope.listar()

})
