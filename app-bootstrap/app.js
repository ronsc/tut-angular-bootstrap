(function() {
	'use strict';

	angular
		.module('ExamApp', []);

	angular
		.module('ExamApp')
		.controller('AppController', AppController)
		.factory('DataService', DataService)
		.directive('topMenu', topMenu);


	function AppController($scope, DataService) {
		$scope.init = init;


		function init() {
			$scope.name = 'Somsri';
			$scope.datas = DataService.getAll();
		}
	}

	function DataService() {
		return {
			getAll: getAll
		};

		function getAll() {
			return [
				{
					id: 1,
					title: 'title 1',
					comments: [
						{uid: '001', name: 'aaa', comment: 'comment 1'},
						{uid: '002', name: 'bbb', comment: 'comment 2'},
						{uid: '003', name: 'ccc', comment: 'comment 3'}
					]
				},
				{
					id: 2,
					title: 'title 2',
					comments: [
						{uid: '004', name: 'ddd', comment: 'comment 1'},
						{uid: '005', name: 'eee', comment: 'comment 2'},
						{uid: '006', name: 'fff', comment: 'comment 3'}
					]
				}
			];
		}
	}
	
	function topMenu() {
		return {
			restrict: 'E',
			templateUrl: 'top-menu-tpl.html'
		}
	}

})();