(function () {

  angular
    .module( 'app' )
    .component( 'topNavbar', {

      bindings: {},
      templateUrl: "components/topNavbar.html",
      controller: TopNavbarController,

    });


  angular
    .module( 'app' )
    .controller( 'TopNavbarController', TopNavbarController );

    TopNavbarController.$inject = [
      "ViewHelper"
    ];

    function TopNavbarController( ViewHelper ) {

      var vm = this;

      // Initial state.
      vm.isSortingListShown = false;

      // Expose the public methods.
      vm.linkTo = ViewHelper.linkTo;

      // Allows nav_buttons to respond to mouseclicks.
      angular.element( '.contact' )
        .on( "click", function () {
          angular.element( '.nav_button' ).removeClass( 'active' );
          angular.element( '.contact' ).addClass( 'active' );
        });

      angular.element( '.about' )
        .on( "click", function () {
          angular.element( '.nav_button' ).removeClass( 'active' );
          angular.element( '.about' ).addClass( 'active' );
        });

      angular.element( '.home' )
        .on( "click", function () {
          angular.element( '.nav_button' ).removeClass( 'active' );
          angular.element( '.home' ).addClass( 'active' );
        });

      angular.element( '.sort-portfolio' )
        .on( "click", function () {
          angular.element( '.nav_button' ).removeClass( 'active' );
          angular.element( '.home' ).addClass( 'active' );
        });

    } // end TopNavbarController

 })();

