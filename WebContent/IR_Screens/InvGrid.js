var app = angular.module('app', ['ui.grid','ui.grid.pagination','ui.grid.selection']);

app.controller('MainCtrl',  function ($scope, $http) {
	 $scope.fundContents = null;
	 $scope.discPerfcontents = null;
	 $scope.annualPerfContents = null;
	 var columndef = [
	                     {field: 'Rank', width:70, cellClass: 'center-align'}, 
    	                 {field: 'Fund', width:300, cellClass: 'center-align'},
    	                 {field: 'Group', width:300, cellClass: 'center-align'},
    	                 {field: 'Focus', width:200, cellClass: 'center-align'},
    	                 {field: 'Yield', width:60, cellClass: 'center-align'}, 
    	                 {field: '1Y'},
    	                 {field: '3Y'},
    	                 {field: '5Y'}
    	                ,{field: 'image', displayName: '', enableFiltering: false, enableSorting: false, enableGridMenu: false,
    	    			    enableSelectAll: false, width:40, cellTemplate:"<img width=\"50px\" ng-src=\"../Images/walmart_logo.jpg\"/>"}
	               ]; 
	 
	 $http.get('../JSON/fundtable.json').success(function(data) { 
		    $scope.fundContents=data.fundOverview;
		    $scope.discPerfcontents=data.discretePerformance;
		    $scope.annualPerfContents=data.annualPerformance;
		    });  

	 $scope.fundContents_grid = {
			 	data: 'fundContents',
			 	enableSorting: true,
			 	enableFiltering: true,
			    enableGridMenu: true,
			    enableSelectAll: true,
			    enablePaging: true,
			    paginationPageSizes: [10, 20, 30],
			    paginationPageSize: 10,
			    noTabInterference: true,
			    enableColumnResizing: true,
	    	    columnDefs: columndef 
			  };
	 $scope.discPerfcontents_grid = {
			 	data: 'discPerfcontents',
			 	enableSorting: true,
			 	enableFiltering: true,
			    enableGridMenu: true,
			    enableSelectAll: true,
			    enablePaging: true,
			    paginationPageSizes: [10, 20, 30],
			    paginationPageSize: 10,
			    noTabInterference: true,
			    enableColumnResizing: true,
			    columnDefs: columndef
			  };
	 $scope.annualPerfContents_grid = {
			 	data: 'annualPerfContents',
			 	enableSorting: true,
			 	enableFiltering: true,
			    enableGridMenu: true,
			    enableSelectAll: true,enablePaging: true,
			    paginationPageSizes: [10, 20, 30],
			    paginationPageSize: 10,
			    noTabInterference: true,
			    enableColumnResizing: true,
			    columnDefs: columndef
			  };
	 
});
