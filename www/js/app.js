// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('babynames', [
  'ionic',
  'ui.grid',
  'ui.grid.pagination',
  'ui.grid.infiniteScroll'
])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    //$locationProvider.html5Mode(true);

    $stateProvider
      .state('app', {
        abstract: true,
        url: '',
        templateUrl: 'tpl/main.html',
        controller: 'MainController'
      })
      .state('app.home', {
        url: '/',
        templateUrl: 'tpl/home.html',
        controller: 'HomeController'
      })
      .state('app.letter', {
        url: '/names/:letter',
        templateUrl: 'tpl/letter.html',
        controller: '',
        //resolve: {
        //  namesByLetter: function (NameFactory, $stateParams) {
        //    return NameFactory.getNamesByLetter(constants.getNamesByLetter, $stateParams.letter);
        //  },
        //  letter: function ($stateParams) {
        //    return $stateParams.letter;
        //  }
        //}
      })
  })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
