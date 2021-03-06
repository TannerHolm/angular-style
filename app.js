var app = angular.module("app", ["ngRoute", "ngAnimate"]);

app.config(function($routeProvider) {
    $routeProvider
    .when('/',
      {
        templateUrl: "views/welcome.html",
        controller: "AppCtrl"
      }
    )
    .when('/portfolio',
      {
        templateUrl: "views/portfolio.html",
        controller: "AppCtrl"
      }
    )
    .when('/contact',
      {
        templateUrl: "contact.html",
        controller: "AppCtrl"
      }
    )
    .when('/about',
      {
        templateUrl: "views/about.html",
        controller: "AppCtrl"
      }
    )


});

app.controller("AppCtrl", function($scope) {
    $scope.model = {
        message: "This is my app!!!"
    }
})
