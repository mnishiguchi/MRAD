'use strict';


/**
 * jQuery code
 * Allows nav-buttons to respond to mouseclicks.
 */
$( document  ).ready( function () {

  $( '.contact' ).click( function () {
    $( '.nav-button' ).removeClass( 'active' );
    $( '.contact').addClass( 'active' );
  });

  $( '.about' ).click( function () {
    $( '.nav-button' ).removeClass( 'active' );
    $( '.about').addClass( 'active' );
  });

  $( '.home' ).click( function () {
    $( '.nav-button' ).removeClass( 'active' );
    $( '.home').addClass( 'active' );
  });

  $( '.sort-portfolio' ).click( function () {
    $( '.nav-button' ).removeClass( 'active' );
    $( '.home').addClass( 'active' );
  });

});


// ---------------------------------------------- //
// ---------------------------------------------- //


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

        // $http
        //   .get( 'data/portfolio.json' )
        //   .success( function( data ) {
        //     vm.portfolio = data;
        //   });

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

        // $http
        //   .get( 'data/' + $routeParams.workId + '.json' )
        //   .success( function( data ) {
        //     vm.work = data;
        //   });
        // }

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


  // -------------------------------------------- //
  // -------------------------------------------- //


  /**
   * Defines the app version.
   */
  angular
    .module( 'app' )
    .value( 'version', '0.1' );


  // -------------------------------------------- //
  // -------------------------------------------- //


  /**
   * Interpolates the app version number into the passed-in string.
   * Insertion points must be specified by the word "%VERSION%".
   */
  angular
    .module( 'app' )
    .filter( 'interpolateAppVersion', interpolateAppVersion );

    interpolateAppVersion.$inject = [
      'version'
    ];

    function interpolateAppVersion( version ) {

      var filter = function( text ) {

        // g: global match
        // m: match over multiple lines
        return String( text  ).replace( /\%VERSION\%/mg, version );
      }

      return filter;
    }


  // -------------------------------------------- //
  // -------------------------------------------- //


  /**
   * appVersion
   * Set the app version text on the element.
   */
  angular
    .module( 'app' )
    .directive( 'appVersion', appVersion );

    appVersion.$inject = [
      'version'
    ];

    function appVersion( version ) {
      return link;
    }

    function link( scope, elm, attrs ) {
      elm.text( version );
    }

})(); // end module
