$(document).ready(function(){
  $(".player__item").draggable({
   containment:".field__box",
   cursor: "grabbing"
  })
});

//When mouseover the player, show card and change box-shadow color
$(".player__item").on('mouseover', function(){
  $(this).find(".player__item--card").css("display", "flex");
  //$(this).(".player__item").css("box-shadow", "0 0 30px blue");
});

//When mouseout the player, hidden card and change box-shadow color
$(".player__item").on('mouseout', function(){
  $(this).find(".player__item--card").css("display", "none");
});

/*function cardShow(){
  document.getElementsByClassName("player__item--card").style.display = "flex";
};

document.getElementsByClassName("player__item").addEventListener("click", cardShow());*/ 

/*var canvas = document.getElementsByClassName('paint-canvas');
var ctx = canvas.getContext('2d');
 
var painting = document.getElementsByClassName('field');
var paint_style = getComputedStyle(painting);
canvas.width = parseInt(paint_style.getPropertyValue('width'));
canvas.height = parseInt(paint_style.getPropertyValue('height'));

var mouse = {x: 0, y: 0};
 
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

ctx.lineWidth = 3;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#00CC99';

canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
 
    canvas.addEventListener('mousemove', onPaint, false);
}, false);

canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);
 
var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};*/