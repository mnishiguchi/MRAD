'use strict';

(function() {

  /**
   * Declares the app module.
   */
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
   * Configuration.
   */
  angular
    .module('app' )
    .config( config )
    .run( run );

    config.$inject = [
      "$routeProvider"
    ];

    function config( $routeProvider ) {

      $routeProvider
        .when('/', {
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
          controller: "ContactController as contact"
        })
        .otherwise({
          redirectTo: '/'
        });

    } // end config


    run.$inject = [
      "$rootScope",
      '$location',
      '$routeParams'
    ];

    function run( $rootScope, $location, $routeParams ) {

      // $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
      //   console.log('Current route name: ' + $location.path());
      // });

    } // end run


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
      vm.items = [];

      // Load the portfolio data into vm.
      vm.items = getPortfolioData();


      // ---
      // PRIVATE METHODS
      // ---


      /**
       * Fetches the data for the entire work and store it into vm.portfolio.
       */
      function getPortfolioData() {

        var stubList = [];

        for ( var i = 0; i < 10; i++ ) {
          stubList.push({
            name: "item_" + i,
            desc: "desc_" + i,
          });
        }

        return stubList;

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


  // -------------------------------------------- //
  // -------------------------------------------- //


  /**
   * Controls the contact page.
   */
  angular
    .module( 'app' )
    .controller( 'ContactController', ContactController );

    ContactController.$inject = [
      '$routeParams',
      '$http'
    ];

    function ContactController() {

      var vm = this;

      // Initial state.
      vm.message = "";
      vm.items = [
        {
          name: "github",
          url: "https://github.com/mnishiguchi",
          icon: "img/ic-github-256.png"
        },
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/mnishiguchi",
          icon: "img/ic-linkedin-256.png"
        },
        {
          name: "twitter",
          url: "https://twitter.com/mnishiguchidc",
          icon: "img/ic-twitter-256.png"
        },
      ]

      // Expose the public methods.
      vm.sendEmail = sendEmail;
      vm.clearMsg  = clearMsg;


      /**
       * Opens the default email program with title, address and message prefilled.
       */
      function sendEmail() {

        window.location.href = "mailto:nishiguchi.masa@gmail.com"
          + "?cc=masatoshi.nishiguchi@udc.edu"
          + "&subject=" + escape( "Hello, Masa!" )
          + "&body=" + vm.message
        ; // end window.location.href

      }


      /**
       * Clear the text in the textarea.
       */
      function clearMsg() {
        vm.message = "";
      }

    } // end ContactController


  // -------------------------------------------- //
  // -------------------------------------------- //


  angular
    .module( 'app' )
    .factory( 'ViewHelper', ViewHelper );

    ViewHelper.$inject = [
      "$location"
    ];

    function ViewHelper( $location ) {

      var service = {

        goToLink: function( path ) { $location.path( path ); }

      };

      return service;

    }

})(); // end module
