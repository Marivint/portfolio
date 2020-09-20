(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/cursor.js":
/*!********************************!*\
  !*** ./resources/js/cursor.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// set the starting position of the cursor outside of the screen
var clientX = -100;
var clientY = -100;
var innerCursor = document.querySelector(".cursor");

var initCursor = function initCursor() {
  // add listener to track the current mouse position
  document.addEventListener("mousemove", function (e) {
    clientX = e.clientX;
    clientY = e.clientY;
  }); // transform the innerCursor to the current mouse position
  // use requestAnimationFrame() for smooth performance

  var render = function render() {
    innerCursor.style.transform = 'translate(' + clientX + 'px, ' + clientY + 'px)'; // if you are already using TweenMax in your project, you might as well
    // use TweenMax.set() instead
    // TweenMax.set(innerCursor, {
    //   x: clientX,
    //   y: clientY
    // });

    requestAnimationFrame(render);
  };

  requestAnimationFrame(render);
};

initCursor();

/***/ })

}]);