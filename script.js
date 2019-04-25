/**
 * Created by Jayachandra on 4/24/19.
 */
var app = angular.module('myApp' ,[]);

app.controller("MainCtrl", function($scope, $http, $window){
    $scope.isMobile = false;
    $scope.isDesktop = false;
    $scope.isTablet = false;
	$http.get("people.json").then(function(people) {
       $scope.people = people.data.People;

       $scope.profileData= function (person) {
           $scope.selectedPerson = person;
           $scope.selectedPerson.ratingArray = [];
           $scope.selectedPerson.nratingArray = [];

           for(var index = 0; index < $scope.selectedPerson.rating; index++){
               $scope.selectedPerson.ratingArray.push(index+1);
           }

           var nonRating = 5 - $scope.selectedPerson.rating;
           for(var index = 0; index < nonRating; index++){
               $scope.selectedPerson.nratingArray.push(index+1);
           }
       }

       if($window.innerWidth < 768){
           $scope.isMobile = true;
       }
       if($window.innerWidth >= 768 && $window.innerWidth <= 1024){
           $scope.isTablet = true;
       }if($window.innerWidth > 1024){
           $scope.isDesktop = true;
       }

       $scope.profileData($scope.people[0])



       
  });
});

