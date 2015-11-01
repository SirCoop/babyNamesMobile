/**
 * Created by Sir_Coop on 10/27/2015.
 */
'use strict';

angular.module('babynames').directive('babyListNames', function() {
  return {

    restrict: 'A',

    //priority: 1000,

    //terminal: false,

    //template: '<a class="item" ui-sref="app.letter({letter: letter})">{{letter}}</a>',
    template: '<div class="item" ng-click="gotoLetter(letter)">{{letter}}</div>',

    //templateUrl: '',

    replace: true,

    scope: false,

    //transclude: false,

    //controller: String or function(scope, element, attrs, transclude, otherInjectables) { ... },

    //controllerAs: String,

    //require: String,

    link: function(scope, iElement, iAttrs) {
      //scope = $scope
      //iElement = html element containing this attribute directive
      //iAttrs = all attributes of iElement
      //console.log('scope inside dir ', scope);
      //console.log('iElement inside dir ', iElement);
      //console.log('iAttrs inside dir ', iAttrs);



    }

    // return an Object OR function
    //compile: function(tElement, tAttrs, transclude) {
    //            return {
    //                pre: function(scope, iElement, iAttrs, controller) { ... },
    //                post: function(scope, iElement, iAttrs, controller) { ... }
    //            }
    //            // or
    //            return function postLink(...) { ... }
    //        }
  };
});
