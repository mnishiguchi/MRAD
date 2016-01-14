'use strict';


/**
 * Responds to mouseclicks on the nav-buttons.
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


(function() {

  // Declare the app module.
  angular
    .module( 'app', [
      'ngRoute',
      'ngAnimate'
    ]);


  // -------------------------------------------- //
  // -------------------------------------------- //


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
          controller: 'PortfolioController'
        })
        .when('/project/:workId', {
          templateUrl: 'partials/_project.html',
          controller: 'ProjectController'
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


  angular
    .module( 'app' )
    .value( 'version', '0.1' );


  // -------------------------------------------- //
  // -------------------------------------------- //


  angular
    .module( 'app' )
    .filter( 'interpolate', interpolate );

    interpolate.$inject = [
      'version'
    ];
    function interpolate( version ) {
      return function( text ) {
        return String( text  ).replace( /\%VERSION\%/mg, version );
      };
    }


  // -------------------------------------------- //
  // -------------------------------------------- //


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

      getData();


      // ---
      // PRIVATE METHODS
      // ---


      /**
       * Fetch the data for the entire work and store it into vm.portfolio.
       */
      function getData() {

        $http
          .get( 'data/portfolio.json' )
          .success( function( data ) {
            vm.portfolio = data;
          });

      }

    }


  angular
    .module( 'app' )
    .controller( 'ProjectController', ProjectController );

    ProjectController.$inject = [
      '$routeParams',
      '$http',
      '$location',
      '$anchorScroll'
    ];
    function ProjectController( $routeParams, $http, $location, $anchorScroll ) {

      var vm = this;

      // Initial state.
      vm.work = [];

      $anchorScroll();

      getItem();


      // ---
      // PRIVATE METHODS
      // ---


      /**
       * Fetch the data for the work that is specified by the workId.
       */
      function getItem() {

        $http
          .get( 'data/' + $routeParams.workId + '.json' )
          .success( function( data ) {
            vm.work = data;
          });
        }

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


  // -------------------------------------------- //
  // -------------------------------------------- //


  /**
   * resetViewOnclick
   * Resets the view when clicked.
   */
  angular
    .module( 'app' )
    .directive( 'resetViewOnclick', resetViewOnclick );

    resetViewOnclick.$inject = [
      "$location"
    ];
    function resetViewOnclick( $location ) {
      return link;
    }

    /**
     * Binds the element to mouse click.
     */
    function link ( scope, element, attrs ) {
      element.click( function() {
        $location.path( 'portfolio/#' );  // # to go to top
      });
    };

})();
