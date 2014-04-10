
function ContactCtrl($scope, $http) {
  //
  $scope.contact = {}

  $scope.addContact = function(){
    $http({
        method : 'POST',
        url : 'http://rails-angularjs-backend-demo.herokuapp.com/contacts/',
        headers: {'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json, text/plain, */*'},
        data : angular.toJson({"contact":$scope.contact})
    }).then(function(data){ 
      console.log(data)   
      $scope.fetch_contact();
    });
  };

  $scope.fetch_contact = function(){
    $http({
      method : 'GET',
      url : "http://rails-angularjs-backend-demo.herokuapp.com/contacts/",
      headers: {'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json, text/plain, */*'},
    }).then(function(data){ 
      console.log(data)
      var response = data
      $scope.contacts = response.data;   
    });
  };

  $scope.fetch_contact();
};

