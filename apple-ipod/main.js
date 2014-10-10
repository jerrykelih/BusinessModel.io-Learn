angular.module('learnApp', ['ngAnimate', 'ui.router','ui.bootstrap'])

// Route Configure
// =============================================================================
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

          // route to show our basic form (/form)
        .state('state', {
            url: '/state',
            templateUrl: 'stateNav.html',
            controller: 'stateController'
        })

          // nested states
          // each of these sections will have their own view
          // url will be nested (/state/profile)
        .state('state.1', {
            url: '/1',
            templateUrl: 'states/state1.html'
        })

        .state('state.2', {
            url: '/2',
            templateUrl: 'states/state2.html'
        })

        .state('state.3', {
            url: '/3',
            templateUrl: 'states/state3.html'
        })

        .state('state.4', {
            url: '/4',
            templateUrl: 'states/state4.html'
        })

        .state('state.5', {
          url: '/5',
          templateUrl: 'states/state5.html'
        })

        .state('state.6', {
          url: '/6',
          templateUrl: 'states/state6.html'
        })

        .state('state.7', {
          url: '/7',
          templateUrl: 'states/state7.html'
        })

        .state('state.8', {
          url: '/8',
          templateUrl: 'states/state8.html'
        });


        // catch all route
        // send users to the first state page
        $urlRouterProvider.otherwise('/state/1');
    })


// Slide Controller
// =============================================================================
    .controller('stateController', function($scope) {

        // we will store all of our slide data in this object
        $scope.slideData = {};

        // function to process the form
        $scope.processForm = function() {
          alert('awesome!');
        };

    })

// Modal Controller
// =============================================================================
    .controller('ModalCtrl', function ($scope, $modal, $log) {

        $scope.items = ['item1', 'item2', 'item3'];

        $scope.open = function (size) {

            var modalInstance = $modal.open({
              templateUrl: 'slideIntro.html',
              controller: 'ModalInstanceCtrl',
              size: size,
              resolve: {
                  items: function () {
                      return $scope.items;
                  }
              }
            });

          modalInstance.result.then(function (selectedItem) {
              $scope.selected = selectedItem;
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
        };
    })

    .controller('ModalCtrl', function ($scope, $modal, $log) {

        $scope.items = ['item1', 'item2', 'item3'];

        $scope.open = function (size) {

            var modalInstance = $modal.open({
                templateUrl: 'lessonIntro.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    })

// modalInstance dependency.
// =============================================================================
    .controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    })

  .controller('ProgressBarCtrl', function ($scope) {
  });



