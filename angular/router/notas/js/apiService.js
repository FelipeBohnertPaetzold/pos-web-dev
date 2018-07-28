app.service('APIService', function($http) {
  const url = 'http://localhost:3000'

  this.getAll = function(callback) {
    $http.get(`${url}/notas`).then(function(res) {
      callback(null, res.data)
    }, callback)
  }

  this.get = function(id, callback) {
    $http.get(`${url}/notas/${id}`).then(function(res) {
      callback(null, res.data)
    }, callback)
  }

  this.save = function(nota, callback) {
    var urlNota = `${url}/notas`
    if (nota.id) {
      urlNota = `${urlNota}/${nota.id}`
    }
    $http({
      url: urlNota,
      method: nota.id ? 'PUT' : 'POST',
      data: nota
    }).then(function(res) {
      callback(null, res.data)
    }, callback)
  }

  this.delete = function(id, callback) {
    $http.delete(`${url}/notas/${id}`).then(function(res) {
      callback(null, res.data)
    }, callback)
  }

  this.inactive = function(id, callback) {
    var self = this
    $http.get(`${url}/notas/${id}`).then(function(res) {
      var nota = res.data
      nota.inativo = !nota.inativo
      self.save(nota, callback)
    }, callback)
  }
})
