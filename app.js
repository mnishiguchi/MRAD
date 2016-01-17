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
          templateUrl: 'partials/_home.html',
          controller: 'HomeController as home'
        })
        .when('/projects/:id', {
          templateUrl: 'partials/_projects.html',
          controller: 'ProjectsController as projects'
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
      '$location'
    ];

    function run( $rootScope, $location ) {

      // $rootScope.$on(' $routeChangeSuccess', function( event, current, previous ) {
      // });

      // $rootScope.$on( '$locationChangeSuccess', function() {
      //   $rootScope.$broadcast("app.locationChange", $location.path());
      // });

    } // end run


  // -------------------------------------------- //
  // -------------------------------------------- //


  /**
   * Controls the portpolio.
   */
  angular
    .module( 'app' )
    .controller( 'HomeController', HomeController );

    HomeController.$inject = [
      '$http'
    ];

    function HomeController( $http ) {

      var vm = this;

      // Initial state.
      vm.items = [];

      // Load the portfolio data into vm.
      vm.items = getData();


      // ---
      // PRIVATE METHODS
      // ---


      /**
       * Fetches the data for the entire work and store it into vm.items.
       */
      function getData() {

        var itemList = [];

        // First item is about myself.
        itemList.push({
          name: "Masatoshi Nishiguchi",
          desc: "Web developer",
          imgSrc: "https://s.gravatar.com/avatar/60515b6735ed4eeddbd1668f5fe9b5a0?s=500",
          linkTo: "http://mnishiguchi.github.io/"
        });

        // Create placeholder items.
        for ( var i = 1; i < 30; i++ ) {
          itemList.push({
            name: faker.lorem.sentence(),
            desc: faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}'),
            imgSrc: "http://placehold.it/300/09f/fff.png?text=" + i,
            linkTo: "#/projects/" + i
          });
        }

        return itemList;

      } // end getData

    } // end HomeController


  /**
   * Controls the individual project pages.
   */
  angular
    .module( 'app' )
    .controller( 'ProjectsController', ProjectsController );

    ProjectsController.$inject = [
      '$routeParams'
    ];

    function ProjectsController( $routeParams ) {

      var vm = this;

      // Initial state.
      // vm.items = [];

      // Get an entire list of projects from Portfolio service.
      //vm.items = getData();

      // Expose the public methods.
      vm.item = getItem();


      /**
       * @return an item that is specified by the id in the routeParams.
       */
      function getItem() {
        // return vm.items[ $routeParams.id ];

        // Generates a random fake item.
        return {
          name: faker.company.catchPhrase(),
          desc: [ faker.commerce.productAdjective(), " ",
                  faker.commerce.productMaterial(),  " ",
                  faker.commerce.productName(),      ". ",
                  faker.lorem.paragraphs(),
                ].join("")
          };

      } // end getData

    } // end ProjectsController


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

      // Initial state.
      this.items = [
        {
          name: "Github",
          desc: "https://github.com/mnishiguchi",
          linkTo: "https://github.com/mnishiguchi",
          imgSrc: "img/ic-github-256.png"
        },
        {
          name: "LinkedIn",
          desc: "https://www.linkedin.com/in/mnishiguchi",
          linkTo: "https://www.linkedin.com/in/mnishiguchi",
          imgSrc: "img/ic-linkedin-256.png"
        },
        {
          name: "Twitter",
          desc: "https://twitter.com/mnishiguchidc",
          linkTo: "https://twitter.com/mnishiguchidc",
          imgSrc: "img/ic-twitter-256.png"
        },
        {
          name: "Email",
          desc: "masatoshi.nishiguchi@ude.edu",
          linkTo: "mailto:masatoshi.nishiguchi@ude.edu",
          imgSrc: "img/ic-email-256.png"
        },
      ]

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

        goToPath: function( path ) { $location.path( path ); }

      };

      return service;

    }

})(); // end module
