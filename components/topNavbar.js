(function () {

  angular
    .module( 'app' )
    .component( 'topNavbar', {

      bindings: {
      },
      templateUrl: "components/topNavbar.html",
      controller: TopNavbarController,

    });


  angular
    .module( 'app' )
    .controller( 'TopNavbarController', TopNavbarController );

    TopNavbarController.$inject = [ ];


    /**
     * Allows nav-buttons to respond to mouseclicks.
     */
    function TopNavbarController() {

      angular.element( '.contact' )
        .on( "click", function () {
          angular.element( '.nav-button' ).removeClass( 'active' );
          angular.element( '.contact' ).addClass( 'active' );
        });

      angular.element( '.about' )
        .on( "click", function () {
          angular.element( '.nav-button' ).removeClass( 'active' );
          angular.element( '.about' ).addClass( 'active' );
        });

      angular.element( '.home' )
        .on( "click", function () {
          angular.element( '.nav-button' ).removeClass( 'active' );
          angular.element( '.home' ).addClass( 'active' );
        });

      angular.element( '.sort-portfolio' )
        .on( "click", function () {
          angular.element( '.nav-button' ).removeClass( 'active' );
          angular.element( '.home' ).addClass( 'active' );
        });

    } // end TopNavbarController

 })();

