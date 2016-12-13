var app = angular.module('todoController', []);

	// inject the Todo service factory into our controller
	app.controller('mainController', ['$scope','$http','Todos', function($scope, $http, Todos) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Todos.get()
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
			});

		// ADD JIB ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.addJob = function(id) {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Todos.addJob(id)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Todos.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Todos.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data; // assign our new list of todos
				});
		};
	}]);
	
			app.controller('jenkinsRestParser', ['$scope', '$http', function($scope, $http) {
/*var config = {headers:  {
        'Access-Control-Allow-Origin': '*'
    }
};
    $http.get("http://rest-service.guides.spring.io/greeting").
        then(function(response) {
            $scope.data = response.data;
        });
	*/
	$http({
        url: 'http://aprisoci/job/F100/job/DBT/job/RestoreDatabaseForGPM_ORA/api/json',
        method: "GET",
        data: {test :  name },
        withCredentials: true,
        headers: {
                    'Content-Type': 'application/json; charset=utf-8'
        }
	}).then(function(response){		
          $scope.data = response.data;
	});
		}]);