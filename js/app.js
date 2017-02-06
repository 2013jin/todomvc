(function(angular) {
	'use strict';

	var myApp = angular.module('app', ['ngRoute','app.controller.main']);
	myApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/:status?', {
				controller: 'MainController',
				templateUrl: 'MainTeml'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
})(angular);