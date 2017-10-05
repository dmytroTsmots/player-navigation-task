document.getElementById('rocket').style.top = '50px';
document.getElementById('rocket').style.left = '50px';


document.body.onkeydown = function (e) {
	var el = document.getElementById('rocket');
  
  var KEYCODE_LEFT = 37;
  var KEYCODE_RIGHT = 39;
  var KEYCODE_UP = 38;
  var KEYCODE_DOWN = 40;
  var KEYCODE_SPACE = 32;
  

  if (e.keyCode == KEYCODE_LEFT && parseInt(el.style.left) > 40) {
    el.style.left = (parseInt(el.style.left) - 10) + 'px';
    el.classList.remove('right');
    el.classList.add('left');
    el.classList.remove('top');
    el.classList.remove('bottom');
  }
  else if (e.keyCode == KEYCODE_RIGHT && parseInt(el.style.left) < 1250) {
    el.style.left = (parseInt(el.style.left) + 10) + 'px';
    el.classList.add('right');
    el.classList.remove('left');
    el.classList.remove('top');
    el.classList.remove('bottom');
  }
  else if (e.keyCode == KEYCODE_DOWN && parseInt(el.style.top) < 570) {
    el.style.top = (parseInt(el.style.top) + 10) + 'px';
    el.classList.remove('right');
    el.classList.remove('left');
    el.classList.remove('top');
    el.classList.add('bottom');
  }
  else if (e.keyCode == KEYCODE_UP && parseInt(el.style.top) > 40) {
    el.style.top = (parseInt(el.style.top) - 10) + 'px';
    el.classList.remove('right');
    el.classList.remove('left');
    el.classList.add('top');
    el.classList.remove('bottom');
  }
  else if (e.keyCode == KEYCODE_SPACE) {
    el.classList.add('fire');
  }
}

document.body.onkeyup = function (elem) { 
  var KEYCODE_SPACE = 32;
  var el = document.getElementById('rocket');
  if (elem.keyCode == KEYCODE_SPACE) {
    el.classList.remove('fire');
  }
}