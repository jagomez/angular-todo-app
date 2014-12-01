(function() {
	"use strict";

	angular.module("app").controller("stuffCtrl", function($scope){
		$scope.toDos = [
		{
			text: "first Item",
			complete: false,
		}

		];
		$scope.getTotalToDos = function () {
			return $scope.toDos.length;
		}
		
	
		$scope.addToDo = function(text) {
			if (text) {
				var newToDo = {
					text: text,
					complete: false
				}
			$scope.toDos.push(newToDo);
			$scope.newToDoText= " ";
			}

		};
		$scope.positive = function(toDo) {
			return toDo.indexOf("stupid") == -1;
		};

		
		// $scope.clearCompleted = function () {
		// 		$scope.toDos = $filter('filter')($scope.toDos, function(toDo){
		// 			return !todo.complete;
		// 		}) 

		// };


		
		window.scope = $scope;
	});
}());