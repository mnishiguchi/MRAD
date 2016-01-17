/**
 * topNavbar
 * ---
 * Detects current path and sets the corresponding button to active.
 * The btnNames are by convention, "home, "about" or "contact".
 * The $location and ViewHelper services are required.
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

