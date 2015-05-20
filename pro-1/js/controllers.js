var phonecatApp = angular.module('phonecatApp', []);
var scopeObj;
phonecatApp.controller('PhoneListCtrl', function($scope) {
   
	scopeObj = $scope;
	$scope.phoneList = []; 

	$scope.addContact=function() 
	{  
		if(!$scope.validateNewContact($scope.contactNumber) )
		$scope.phoneList.push(  {name: $scope.contactName,number: $scope.contactNumber }); 
	};

	$scope.validateNewContact=function(newNumber) 
	{   
		for(var i = 0; i < $scope.phoneList.length; i++) 
			{
			    if ($scope.phoneList[i].number == newNumber) 
			    {
			    	alert("Number is already existing \n" +"\nExisting Contact : "+$scope.phoneList[i].name+" , Number: "+$scope.phoneList[i].number);
			        return true;
			        break;
			    }
			} 
			return false;
	};

});




 
 