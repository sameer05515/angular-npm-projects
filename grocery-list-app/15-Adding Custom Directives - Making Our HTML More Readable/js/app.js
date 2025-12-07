/**
 * Created by Thomas on 5/28/2015.
 */
var app = angular.module('groceryListApp', ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/",{
            templateUrl: "views/groceryList.html",
            controller: "HomeController"
        })
        .when("/addItem",{
            templateUrl: "views/addItem.html",
            controller: "GroceryListItemController"
        })
        .when('/addItem/edit/:id',{
            templateUrl: 'views/addItem.html',
            controller: 'GroceryListItemController'
        })
        .otherwise({
            redirectTo: "/"
        })
});

app.service("GroceryService", function(){

    var groceryService = {};

    groceryService.groceryItems = [
        {id: 1, completed: true, itemName: 'milk', date: new Date("October 1, 2014 11:13:00")},
        {id: 2, completed: true, itemName: 'cookies', date: new Date("October 1, 2014 11:13:00")},
        {id: 3, completed: true, itemName: 'ice cream', date: new Date("October 1, 2014 11:13:00")},
        {id: 4, completed: true, itemName: 'potatoes', date: new Date("October 2, 2014 11:13:00")},
        {id: 5, completed: true, itemName: 'cereal', date: new Date("October 3, 2014 11:13:00")},
        {id: 6, completed: true, itemName: 'bread', date: new Date("October 3, 2014 11:13:00")},
        {id: 7, completed: true, itemName: 'eggs', date: new Date("October 4, 2014 11:13:00")},
        {id: 8, completed: true, itemName: 'tortillas', date: new Date("October 5, 2014 11:13:00")}
    ];


    groceryService.findById = function(id){
        for(var item in groceryService.groceryItems){
            if(groceryService.groceryItems[item].id === id) {
                console.log(groceryService.groceryItems[item]);
                return groceryService.groceryItems[item];
            }
        }
    };

    groceryService.getNewId = function(){

        if(groceryService.newId){
            groceryService.newId++;
            return groceryService.newId;
        }else{
            var maxId = _.max(groceryService.groceryItems, function(entry){ return entry.id;})
            groceryService.newId = maxId.id + 1;
            return groceryService.newId;
        }
    };

    groceryService.removeItem = function(entry){
        var index = groceryService.groceryItems.indexOf(entry);

        groceryService.groceryItems.splice(index, 1);
    };

    groceryService.save = function(entry) {

        var updatedItem = groceryService.findById(entry.id);

        if(updatedItem){

            updatedItem.completed = entry.completed;
            updatedItem.itemName = entry.itemName;
            updatedItem.date = entry.date;

        }else {
            entry.id = groceryService.getNewId();
            groceryService.groceryItems.push(entry);
        }

    };

    return groceryService;

});

app.controller("HomeController", ["$scope", "GroceryService", function($scope, GroceryService) {

    $scope.groceryItems = GroceryService.groceryItems;

    $scope.removeItem = function(entry){
        GroceryService.removeItem(entry);
    }

}]);

app.controller("GroceryListItemController", ["$scope", "$routeParams", "$location", "GroceryService", function($scope, $routeParams, $location, GroceryService){

    if(!$routeParams.id) {
        $scope.groceryItem = {id: 0, completed: false, itemName: "", date: new Date()};
    }else{
        $scope.groceryItem = _.clone(GroceryService.findById(parseInt($routeParams.id)));
    }


    $scope.save = function(){
        GroceryService.save( $scope.groceryItem );
        $location.path("/");
    };

}]);

app.directive("tbGroceryItem", function(){
    return{
        restrict: "E",
        templateUrl: "views/groceryItem.html"
    }
});