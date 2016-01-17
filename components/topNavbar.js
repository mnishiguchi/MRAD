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
      vm.activeBtn     = "home";

      // If the current path is not '/', set the appropreate button to active
      // base on the path name.
      if ( $location.path() != '/' ) {

        // Strip the slash ("/about" ==> "about")
        vm.activeBtn = $location.path().substr( 1 );

      }

      // Expose the public methods.
      vm.handleClick = handleClick;
      vm.isActive  = function ( btnName ) { return ( btnName == vm.activeBtn ); }
      vm.toggleSorter = function() { return vm.isSorterShown = ! vm.isSorterShown; };


      // ---
      // PRIVATE METHODS
      // ---


      /**
       * Sets the specified button to active and visits the corresponding page.
       */
      function handleClick( btnName ) {
        vm.activeBtn = btnName;
        ViewHelper.goToPath('/' + btnName );
      }

    } // end TopNavbarController

 })();

