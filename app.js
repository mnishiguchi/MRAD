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
      '$routeProvider'
    ];

    function config( $routeProvider ) {

      $routeProvider
        .when( '/', {
          templateUrl:  'partials/_home.html',
          controllerAs: 'home',
          controller:   'HomeController'
        })
        .when( '/projects/:id', {
          templateUrl:  'partials/_projects.html',
          controllerAs: 'projects',
          controller:   'ProjectsController'
        })
        .when( '/about', {
          templateUrl: 'partials/_about.html',
        })
        .when( '/contact', {
          templateUrl:  'partials/_contact.html',
          controllerAs: 'contact',
          controller:   'ContactController'
        })
        .otherwise({
          redirectTo: '/'
        });

    } // end config


    run.$inject = [];

    function run() {

      // $rootScope.$on(' $routeChangeSuccess', function( event, current, previous ) {
      // });
      // $rootScope.$on( '$locationChangeSuccess', function() {
      // });

    } // end run


  // -------------------------------------------- //
  // -------------------------------------------- //


  /**
   * Controls the home page.
   */
  angular
    .module( 'app' )
    .controller( 'HomeController', HomeController );

    HomeController.$inject = [
      'Portfolio'
    ];

    function HomeController( Portfolio ) {

      // Load the portfolio data from the Portfolio service.
      this.items = Portfolio.getData();

    } // end HomeController


  /**
   * Controls the individual project pages.
   */
  angular
    .module( 'app' )
    .controller( 'ProjectsController', ProjectsController );

    ProjectsController.$inject = [
      '$routeParams',
      'Portfolio'
    ];

    function ProjectsController( $routeParams, Portfolio ) {

      // Initial state.
      this.item = getItem();


      // ---
      // PRIVATE METHODS
      // ---


      /**
       * Returns the portfolio item that corresponds the current path.
       */
      function getItem() {

        var items = Portfolio.getData();

        return items[ $routeParams.id ];

      } // end getItem

    } // end ProjectsController


  // -------------------------------------------- //
  // -------------------------------------------- //


  /**
   * Controls the contact page.
   */
  angular
    .module( 'app' )
    .controller( 'ContactController', ContactController );

    ContactController.$inject = [];

    function ContactController() {

      this.items = [
        {
          name: 'Email',
          desc: 'masatoshi.nishiguchi@udc.edu',
          linkTo: 'mailto:masatoshi.nishiguchi@udc.edu',
          imgSrc: 'img/email_200.png'
        },
        {
          name: 'Github',
          desc: 'https://github.com/mnishiguchi',
          linkTo: 'https://github.com/mnishiguchi',
          imgSrc: 'img/github_200.png'
        },
        {
          name: 'LinkedIn',
          desc: 'https://www.linkedin.com/in/mnishiguchi',
          linkTo: 'https://www.linkedin.com/in/mnishiguchi',
          imgSrc: 'img/linkedin_200.png'
        },
        {
          name: 'Facebook',
          desc: 'https://www.facebook.com/mnishiguchidc',
          linkTo: 'https://www.facebook.com/mnishiguchidc',
          imgSrc: 'img/facebook_200.png'
        },
        {
          name: 'Twitter',
          desc: 'https://twitter.com/mnishiguchidc',
          linkTo: 'https://twitter.com/mnishiguchidc',
          imgSrc: 'img/twitter_200.png'
        },
        {
          name: 'Phone',
          desc: 'Don\'t click this',
          linkTo: 'https://example.com',
          imgSrc: 'img/phone_200.png'
        }

      ]; // end items

    } // end ContactController


  // -------------------------------------------- //
  // -------------------------------------------- //


  /**
   * Provides the data for the entire portfolio.
   */
  angular
    .module( 'app' )
    .factory( 'Portfolio', Portfolio );

    Portfolio.$inject = [];

    function Portfolio() {

      // Stores the portfolio data.
      var itemList = [];

      // Returns the API.
      return {
        getData: getData
      };


      /**
       * @return the entire portfolio data.
       */
      function getData() {

        // Loads data only one time.
        if ( itemList.length < 1 ) {
          itemList = generateFakeData()
        }

        return itemList;

      } // end getData


      /**
       * Generates and returns thirty fake items.
       */
      function generateFakeData() {

        var itemList = [];

        // First item is about myself.
        itemList.push({

          name:      'Masatoshi Nishiguchi',
          descShort: 'Web developer',
          descLong: [ faker.commerce.productAdjective(), ' ',
                      faker.commerce.productMaterial(),  ' ',
                      faker.commerce.productName(),      '. ',
                      faker.lorem.paragraphs(),
                    ].join(""),
          imgSrc: 'https://s.gravatar.com/avatar/60515b6735ed4eeddbd1668f5fe9b5a0?s=500',
          linkTo: 'http://mnishiguchi.github.io/'

        });

        // Create 29 placeholder items.
        for ( var i = 1; i < 30; i++ ) {
          itemList.push({

            name:      faker.company.catchPhrase(),
            descShort: faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}'),
            descLong: [ faker.commerce.productAdjective(), ' ',
                        faker.commerce.productMaterial(),  ' ',
                        faker.commerce.productName(),      '. ',
                        faker.lorem.paragraphs(),
                      ].join(""),
            imgSrc: 'http://placehold.it/300/09f/fff.png?text=' + i,
            linkTo: '#/projects/' + i

          });
        }

        return itemList;

      } // end generateFakeData


    } // end Portfolio


  // -------------------------------------------- //
  // -------------------------------------------- //


  angular
    .module( 'app' )
    .factory( 'ViewHelper', ViewHelper );

    ViewHelper.$inject = [
      '$location'
    ];

    function ViewHelper( $location ) {

      return {
        goToPath: goToPath
      };

      function goToPath( path ) {
        $location.path( path );
      }

    } // end ViewHelper

})(); // end module
