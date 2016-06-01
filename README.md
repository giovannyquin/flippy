Card-flip
======================
Angular directive for [jQuery-Flip]( https://nnattawat.github.io/flip/

Usage
-----

- Using [bower](http://bower.io/) to install it. `bower card-flip`
- Add `jquery`, `angular`and `jQuery Flip` to your code.

```html
    <link rel="stylesheet" href="../bower_components/slick-carousel/slick/slick.css">
    <link rel="stylesheet" href="../bower_components/slick-carousel/slick/slick-theme.css">
    
    <script src="../bower_components/jquery/jquery.js"></script>
    <script src="../bower_components/angular/angular.js"></script>
    <script src="../bower_components/flip/dist/jquery.flip.js"></script>
```

- Add the sortable module as a dependency to your application module: `cardFlip`

```js
var myAppModule = angular.module('MyApp', ['cardFlip'])
```

This directive allows you to use the jQuery Flip plugin as
an angular directive. It can be specified in your HTML
as either a `<div>` attribute or a `<card-flip>` element.

```html
    <card-flip trigger=”click” axis=”y” speed=1000>
    ...
    </ card-flip>
```

### Attributes ###
`trigger`: optional `String` containing any of these options. 'click','hover','manual'. Using manual means that you have to activate it via javascript. You must use it of the next way, with an card id $('#card').flip('toggle'); .
 - `speed` Duration of the flipping animation in miliseconds. Higher means slower. Just Integer numbers
 - `axis` The axis that you want to rotate around
 - `reverse` Set to true if you want to reverse the direction of the flip.

