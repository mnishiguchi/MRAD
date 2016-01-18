/**
 * topNavbar
 * --
 * Detects current path and sets the corresponding button to active.
 * The btnNames are by convention, "home, "about" or "contact".
 * The $location and ViewHelper services are required.
 * --
 * NOTE: It is ideal to put this component inside of the ngView so that we can
 * switch nav-buttons correctly upon any route change. If it is placed
 * outside of the ngView, for example when back button is pressed, it is not easy
 * to set a correct button active.
 */
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
      "$location",
      "ViewHelper"
    ];

    function TopNavbarController( $location, ViewHelper ) {

      var vm = this;

      // Initial state.
      vm.isSorterShown = false;
      vm.activeBtn = ( $location.path() == '/about' || $location.path() == '/contact' )
                   ? $location.path().substr( 1 )
                   : "home" ;

      // If the current path is '/about' or '/contact', set the appropreate button
      // to active base on the path name; otherwise, set home button to active.
      // Strip the slash ("/about" ==> "about")

      // Expose the public methods.
      vm.handleClick = handleClick;
      vm.isActive = function ( btnName ) { return ( btnName == vm.activeBtn ); }
      vm.toggleSorter = function() { return vm.isSorterShown = ! vm.isSorterShown; };


      // ---
      // PRIVATE METHODS
      // ---


      /**
       * Sets the specified button to active and visits the corresponding page.
       */
      function handleClick( btnName ) {
        vm.activeBtn = btnName;
        ViewHelper.goToPath( '/' + btnName );
      }

    } // end TopNavbarController

 })();

