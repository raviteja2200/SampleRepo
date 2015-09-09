var app = angular.module("myApp",[]);

var map;
function initMap(){
	map = new google.maps.Map(document.getElementById('map'),{
	center:{lat:-34.397, lng:150.644},
	zoom:8
});
}

/*
list of users in grid 
take another 
services and factories will used for two purposes
interact with 
to share the data across the filters controls directives
in order to use the bussiness logic also we use these things


--> create a folder called factories
-->create file in folder called userDataFactory
--> syntax is excalty similar to controller app.factory('userDataFactory',['$scope',userDataFactory])
--> define a function with the file with name userDataFactory function userDataFactory(){
-->factories will always return objects
--> var userData =[
		{""}
		{""}
		{""}
	]
	getUserData:function(){
		return userdata
		}	
	}
	$scope.users = userDataFactory
*/
