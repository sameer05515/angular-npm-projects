/**
 * Created by Thomas on 5/28/2015.
 */
var app = angular.module('groceryListApp', []);

app.controller("HomeController", ["$scope", function($scope) {
    $scope.appTitle = "Grocery List";
}]);

app.controller("GroceryListItemsController", ["$scope", function($scope){

    $scope.groceryItems = [
        {completed: true, itemName: 'milk', date: '2014-10-00'},
        {completed: true, itemName: 'cookies', date: '2014-10-01'},
        {completed: true, itemName: 'ice cream', date: '2014-10-02'},
        {completed: true, itemName: 'potatoes', date: '2014-10-02'},
        {completed: true, itemName: 'cereal', date: '2014-10-03'},
        {completed: true, itemName: 'bread', date: '2014-10-03'},
        {completed: true, itemName: 'eggs', date: '2014-10-04'},
        {completed: true, itemName: 'tortillas', date: '2014-10-04'}
    ]

}]);