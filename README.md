# MRAD
I will attempt to make an imitation of [Mr. Mrad's beautiful portfolio](http://rachidmrad.com/) so that I can learn new techniques to design beautiful websites.

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

```css
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

```css
/*
  http://rachidmrad.com/
 */
.parallelogramRight {
  -webkit-transform: skew(-30deg, 0);
      -ms-transform: skewX(-30deg) skewY(0);
          transform: skew(-30deg, 0);
}
.parallelogramRight .skewAdjuster {
  -webkit-transform: skew(30deg, 0);
      -ms-transform: skewX(30deg) skewY(0);
          transform: skew(30deg, 0);
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

## The custom goToPath method

- HTML5 does not allow `<a href=""><button></button></a>`, as such a custom goToPath helper comes in handy.

```js
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
```

==

## Removing default blue border

- http://stackoverflow.com/a/28196392/3837223
```css
/* Removes default blue border */
.btn:focus,.btn:active:focus,.btn.active:focus,
.btn.focus,.btn:active.focus,.btn.active.focus {
    outline: none;
}
```

==

## Responsive grid of hexagons by web-tiki
- https://github.com/web-tiki/responsive-grid-of-hexagons

==

## Fixing the navbar at the top
1. Take advantage of Bootstrap's navbar-fixed-top class
2. Adjust the margin-top property for the navbar and subsequent content

```html
<nav class="top_navbar navbar-fixed-top" role="navigation">
```

```css
.top_navbar {
  margin-top: 10px;
}

.page {
  margin-top: 120px;
}
```

==

## Obtaining the current path name
- https://docs.angularjs.org/api/ng/service/$location

```js
console.log( 'Current path: ' + $location.path() );
```

==

## Aligning button text

`vertical-align: text-bottom;` or `vertical-align: middle;`

== 

## The fadeIn keyframe animation

```css
/*
  Defines keyframes
  - name        : fadeIn
  - start state : { opacity: 0; }
  - end state   : { opacity: 1; }
*/
@-webkit-keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
   @-moz-keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.fade_in {
  /* Make elements invisible upon start */
  opacity:0;  

  /* Call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */
  -webkit-animation: fadeIn ease-in 1;  
     -moz-animation: fadeIn ease-in 1;
          animation: fadeIn ease-in 1;

  /* This makes sure that after animation is done, we remain at the last keyframe value (opacity: 1)*/
  -webkit-animation-fill-mode: forwards;  
     -moz-animation-fill-mode: forwards;
          animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
     -moz-animation-duration: 1s;
          animation-duration: 1s;
}

.fade_in._1 {
  -webkit-animation-delay: .2s;
     -moz-animation-delay: .2s;
          animation-delay: .2s;
}
.fade_in._2 {
  -webkit-animation-delay: .4s;
     -moz-animation-delay: .4s;
          animation-delay: .4s;
}
.fade_in._3 {
  -webkit-animation-delay: .6s;
     -moz-animation-delay: .6s;
          animation-delay: .6s;
}
.fade_in._4 {
  -webkit-animation-delay: .8s;
     -moz-animation-delay: .8s;
          animation-delay: .8s;
}
.fade_in._5 {
  -webkit-animation-delay: 1.0s;
     -moz-animation-delay: 1.0s;
          animation-delay: 1.0s;
}
.fade_in._6 {
  -webkit-animation-delay: 1.2s;
     -moz-animation-delay: 1.2s;
          animation-delay: 1.2s;
}
.fade_in._7 {
  -webkit-animation-delay: 1.4s;
     -moz-animation-delay: 1.4s;
          animation-delay: 1.4s;
}
.fade_in._8 {
  -webkit-animation-delay: 1.6s;
     -moz-animation-delay: 1.6s;
          animation-delay: 1.6s;
}
.fade_in._9 {
  -webkit-animation-delay: 1.8s;
     -moz-animation-delay: 1.8s;
          animation-delay: 1.8s;
}
```

```html
    <h1 class="display-1">
      <span class="fade_in _1">M</span>
      <span class="fade_in _2">a</span>
      <span class="fade_in _3">s</span>
      <span class="fade_in _4">a</span>
      <span class="fade_in _5">t</span>
      <span class="fade_in _6">o</span>
      <span class="fade_in _7">s</span>
      <span class="fade_in _8">h</span>
      <span class="fade_in _9">i</span>
    </h1>
```

==

## Dynamically setting a background URL
```js
<div ng-style="{ 'background-image': 'url({{ item.imgSrc }})' }">
  some contents...
</div>
```

==

## Scrolling to the top upon route change
- Simply add autoscroll property set to true
- https://docs.angularjs.org/api/ngRoute/directive/ngView

```html
<ng-view autoscroll="true"></ng-view>
```

==

## Forcing to reload the page

```js
$window.location.reload();
```
