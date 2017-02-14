var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

	$scope.newContacts = {};
	$scope.saved = localStorage.getItem('contacts');
	$scope.contacts= (localStorage.getItem('contacts')!==null) ? JSON.parse($scope.saved) : [
		{fname: "Md. Chonchol Mahmud", companyName: "InfoTool", mobileNo: "01722323607", email: "mahmud@infotool-bd.com"}
	];

	localStorage.setItem('contacts', JSON.stringify($scope.contacts));

	$scope.saveContact = function(){

		$scope.contacts.push($scope.newContacts);
		localStorage.setItem('contacts', JSON.stringify($scope.contacts));
		$scope.newContacts = {};
	};


});

