
function ContactCtrl($scope, $http) {
  //
  $scope.contact = {}

  $scope.addContact = function(){
    $http({
        method : 'POST',
        url : 'http://localhost:5010/contacts',
        headers: {'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json, text/plain, */*'},
        data : angular.toJson({"contact":$scope.contact})
    }).then(function(data){ 
      console.log(data)   
    });
  };

  $scope.fetch_contact = function(){
    $scope.isLoading = true; 
    $http({
      method : 'GET',
      url : "http://localhost:5010/contacts/",
      headers: {'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json, text/plain, */*'},
    }).then(function(data){ 
      console.log(data)
      var response = data
      $scope.contacts = response.data;   
      $scope.isLoading = false; 
    });
  };

  $scope.fetch_contact();
};

