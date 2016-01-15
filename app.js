'use strict';

/**
 * Angular code.
 */
(function() {

  // Declare the app module.
  angular
    .module( 'app', [
      'ngRoute',
      'ngAnimate'
    ]);


  // -------------------------------------------- //
  // -------------------------------------------- //


  /**
   * Manages app-wide scope.
   */
  angular
    .module( 'app' )
    .controller( 'AppController', AppController );

    AppController.$inject = [];

    function AppController() {}


  // -------------------------------------------- //
  // -------------------------------------------- //


  /**
   * Defines the routes.
   */
  angular
    .module('app' )
    .config( config );

    config.$inject = [
      "$routeProvider"
    ];

    function config( $routeProvider ) {

      $routeProvider
        .when('/portfolio', {
          templateUrl: 'partials/_portfolio.html',
          controller: 'PortfolioController as portfolio'
        })
        .when('/project/:workId', {
          templateUrl: 'partials/_project.html',
          controller: 'ProjectController as project'
        })
        .when('/about', {
          templateUrl: 'partials/_about.html',
          controller: function() {}
        })
        .when('/contact', {
          templateUrl: 'partials/_contact.html',
          controller: function() {}
        })
        .otherwise({
          redirectTo: '/portfolio'
        });

    } // end config


  // -------------------------------------------- //
  // -------------------------------------------- //


  /**
   * Controls the portpolio.
   */
  angular
    .module( 'app' )
    .controller( 'PortfolioController', PortfolioController );

    PortfolioController.$inject = [
      '$http'
    ];

    function PortfolioController( $http ) {

      var vm = this;

      // Initial state.
      vm.portfolio = [];

      // Load the portfolio data into vm.
      vm.portfolio = getPortfolioData();


      // ---
      // PRIVATE METHODS
      // ---


      /**
       * Fetch the data for the entire work and store it into vm.portfolio.
       */
      function getPortfolioData() {

        // Return a stub list.
        return [
          {
            name: "item_1",
            desc: "desc_1"
          },
          {
            name: "item_2",
            desc: "desc_2"
          },
          {
            name: "item_3",
            desc: "desc_3"
          }
        ];

      } // end getPortfolioData

    } // end PortfolioController


  /**
   * Controls the projects.
   */
  angular
    .module( 'app' )
    .controller( 'ProjectController', ProjectController );

    ProjectController.$inject = [
      '$routeParams',
      '$http'
    ];

    function ProjectController( $routeParams, $http ) {

      var vm = this;

      // Initial state.
      vm.work = [];

      // Get a list of work based on the workID passed in as a param.
      vm.work = getWork();


      // ---
      // PRIVATE METHODS
      // ---


      /**
       * Fetches the data for the work that is specified by the workId in the
       * routeParams.
       */
      function getWork() {

        // A stub list of the item lists.
        var workLists = [
          // [0]
          [
            {
              name: "Ruby",
              desc: "Ruby programming"
            },
            {
              name: "JavaScript",
              desc: "JS programming"
            },
          ],
          // [1]
          [
            {
              name: "Moving estimator",
              desc: "An android app"
            },
            {
              name: "Sample app",
              desc: "A web app"
            },
          ],

        ]; // end workLists

        return workLists[ $routeParams.workId ];

      } // end getWork

    } // end ProjectController

})(); // end module
