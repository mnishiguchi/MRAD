# MRAD
- I will attempt to make an imitation of [Mr. Mrad's beautiful portfolio](http://rachidmrad.com/) so that I can learn new techniques to design beautiful websites.

==

## Some techniques I want to learn

- How to make a website look sophistcated?
- What types of images are required for the purpose of animation?
- How to implement responsive expander navigation
- Animated icons (e.g. +, =)
- How to implement images that respond to mouse hover?
- How the hexagon shapes are re-organized when the screen size changes?
- [ngAnimate](https://docs.angularjs.org/api/ngAnimate)

==

## Parallelogram
- [The Shapes of CSS | CSS-Tricks](https://css-tricks.com/examples/ShapesOfCSS/)
- http://codepen.io/brownerd/pen/vwfJA

```
/*
  Parallelogram shape
  http://codepen.io/brownerd/pen/vwfJA
*/

.parallelogram {
  -webkit-transform: skew(20deg);
     -moz-transform: skew(20deg);
       -o-transform: skew(20deg);
}

.skew-fix{
  display: inline-block;
  transform: skew(-20deg);
}
```

==

## Expander

- [Bootstrap 4 - Responsive utilities](http://v4-alpha.getbootstrap.com/layout/responsive-utilities/)

```html
<button class="home parallelogram active nav-button">
  <a href="#">
    <div class="skew-fix">

      <span class="sr-only">Home button</span>

      <!-- On mobile phones, only shows initials -->
      <span class="letter">M</span>
      <span class="letter hidden-xs-down">a</span>
      <span class="letter hidden-xs-down">s</span>
      <span class="letter hidden-xs-down">a</span>
      <span class="letter hidden-xs-down">t</span>
      <span class="letter hidden-xs-down">o</span>
      <span class="letter hidden-xs-down">s</span>
      <span class="letter hidden-xs-down">h</span>
      <span class="letter hidden-xs-down">i</span>
      &nbsp;
      <span class="letter">N</span>
      <span class="letter hidden-xs-down">i</span>
      <span class="letter hidden-xs-down">s</span>
      <span class="letter hidden-xs-down">h</span>
      <span class="letter hidden-xs-down">i</span>
      <span class="letter hidden-xs-down">g</span>
      <span class="letter hidden-xs-down">u</span>
      <span class="letter hidden-xs-down">c</span>
      <span class="letter hidden-xs-down">h</span>
      <span class="letter hidden-xs-down">i</span>
    </div>
  </a>
</button>
```

==

## The custom linkTo method

- HTML5 does not allow `<a href=""><button></button></a>`, as such a custom linkTo helper comes in handy.

```js
  angular
    .module( 'app' )
    .factory( 'ViewHelper', ViewHelper );

    ViewHelper.$inject = [
      "$location"
    ];

    function ViewHelper( $location ) {
      return {
        linkTo: function( path ) {
          $location.path( path );
        }
      };
    });
```

==

## Removing default blue border

- http://stackoverflow.com/a/21758143/3837223
```css
/* Removes default blue border */
button:focus { outline: 0; }
```

==

## Responsive grid of hexagons by web-tiki
- https://github.com/web-tiki/responsive-grid-of-hexagons

==


