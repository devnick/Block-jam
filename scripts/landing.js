
var animatePoints = function() {
    // turns point into points array
    var points = document.getElementsByClassName('point');
   
    for (let i = 0; i < points.length; i++) {
        points[i].style.opacity = 1;
        points[i].style.transform = "scaleX(1) translateY(0)";
        points[i].style.msTransform = "scaleX(1) translateY(0)";
        points[i].style.webkitTransform = "scaleX(1) translateY(0)";
        }
    };