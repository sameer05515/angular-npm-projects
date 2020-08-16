/**
 * Created by Thomas on 5/28/2015.
 */
var app = angular.module('groceryListApp', ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/",{
            templateUrl: "views/groceryList.html",
            controller: "GroceryListItemsController"
        })
        .when("/addItem",{
            templateUrl: "views/addItem.html",
            controller: "GroceryListItemsController"
        })
        .when("/addItem/:id/",{
            templateUrl: "views/addItem.html",
            controller: "GroceryListItemsController"
        })
        .otherwise({
            redirectTo: "/"
        })
});

app.service("GroceryService", function(){

    var groceryService = {};

    groceryService.groceryItems = [
        {id: 1, completed: true, itemName: 'milk', date: '2014-10-00'},
        {id: 2, completed: true, itemName: 'cookies', date: '2014-10-01'},
        {id: 3, completed: true, itemName: 'ice cream', date: '2014-10-02'},
        {id: 4, completed: true, itemName: 'potatoes', date: '2014-10-02'},
        {id: 5, completed: true, itemName: 'cereal', date: '2014-10-03'},
        {id: 6, completed: true, itemName: 'bread', date: '2014-10-03'},
        {id: 7, completed: true, itemName: 'eggs', date: '2014-10-04'},
        {id: 8, completed: true, itemName: 'tortillas', date: '2014-10-04'}
    ];


    groceryService.getNewId = function(){
        if(groceryService.newId) {
            groceryService.newId++;
            return groceryService.newId;
        }
        else {

        }
    }
    groceryService.save = function(entry){
        groceryService.groceryItems.push(entry);
    };

    return groceryService;

});

app.controller("HomeController", ["$scope", function($scope) {

    $scope.appTitle = "Grocery List"

}]);

app.controller("GroceryListItemsController", ["$scope", "$routeParams", "$location", "GroceryService", function($scope, $routeParams, $location, GroceryService){

    $scope.groceryItems = GroceryService.groceryItems;

    $scope.groceryItem = { id:7, completed:true, itemName: "cheese", date: new Date() }

    $scope.save = function(){
        GroceryService.save( $scope.groceryItem );
        $location.path("/");
    }

}]);