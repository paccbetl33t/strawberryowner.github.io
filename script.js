// Clears the console.
console.clear();
// Defines the HTML elements used.
var count = document.getElementById('count');
var clicker = document.getElementById('clicker');
var r = document.querySelector(':root');
// Defines the click count.
var clicks = 0;
// Defines the current theme. 
var theme = false;
// Executes when the button is clicked.
var onClicked = function() {
  clicks++;
  console.log(clicks);
  count.innerHTML = clicks;
}

var themeChange = function() {
  if (!theme) {
    theme = true;
    r.style.setProperty('--bgcol', '#0F0F0F');
    r.style.setProperty('--textcol', '#FFFFFF');
  } else {
    theme = false;
    r.style.setProperty('--bgcol', '#FFFFFF');
    r.style.setProperty('--textcol', '#0F0F0F');
  }
}

var reset = function() {
  clicks = 0;
  count.innerHTML = clicks;
}

var up = false;

var debug = function() {
  var dbg = document.getElementById('debug');
  var dbgMenu = document.getElementById('debug-menu')
  if (!up) {
    dbg.style.transform = 'translateY(-150px)';
  dbgMenu.style.transform = 'translateY(20px)';
    up = true;
  } else {
    dbg.style.transform = 'none';
  dbgMenu.style.transform = 'translateY(170px)';
    up = false;
  }
}

var clickChange = function() {
  var cAmount = document.getElementById('cChange');
  clicks = cAmount.value;
  count.innerHTML = clicks;
}