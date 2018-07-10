const base = 'http://localhost:3000/posts'

app.service('postsService', function($http) {
  return {
    salvar: function(post, callback) {
      var req = {data: post}

      if (!post.id) {
        req.url = base
        req.method = 'POST'
      } else {
        req.method = 'PUT'
        req.url = base + '/' + post.id
      }

      $http(req).then(function (res) {
        return callback(null, res.data)        
      }, callback)
    },
    listar: function(callback) {
      $http.get(base).then(function (res) {
        return callback(null, res.data)
      }, callback)
    },
    recuperar: function(id, callback) {
      $http.get(base + '/' + id).then(function (res) {
        return callback(null, res.data)
      }, callback)
    },
    remover: function(id, callback) {
      $http.delete(base + '/' + id).then(function (res) {
        return callback(null, res.data)
      }, callback)
    }
  }
})