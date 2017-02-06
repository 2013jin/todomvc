(function(angular) {
	'use strict';
	var controllers = angular.module('app.controller.main', ['app.services.main']);
	controllers.controller('MainController', [
		'$scope',
		'$routeParams',
		'$route',
		'MainService',
		function($scope, $routeParams, $route, MainService) {

			$scope.text = "";
			$scope.todos = MainService.get();

			$scope.add = function() {
				if (!$scope.text) {
					return;
				};
				MainService.add($scope.text);
				$scope.text = "";
			};
			$scope.remove = MainService.remove;

			$scope.clear = function() {
				var newTodos = MainService.clearCompleted();
				$scope.todos = newTodos;
			}


			$scope.existCompleted = MainService.existCompleted;

			$scope.currentEditingId = -1;
			$scope.editing = function(id) {
				$scope.currentEditingId = id;
			}
			$scope.save = function(id) {
				$scope.currentEditingId = -1;
			}


			$scope.toggleAll = MainService.toggleAll;
			$scope.toggle = function() {
				MainService.save();
			};


			$scope.selector = {};
			var status = $routeParams.status;
			switch (status) {
				case 'active':
					$scope.selector = {
						completed: false
					};
					break;
				case 'completed':
					$scope.selector = {
						completed: true
					};
					break;
				default:
					$route.updateParams({
						status: ''
					});
					$scope.selector = {};
					break;
			};

			$scope.equalCompare = function(source, target) {
				return source === target;
			};


		}
	])


})(angular);