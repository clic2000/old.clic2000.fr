// Navigation timing

window.addEventListener("load", function () {
  let now = new Date().getTime();
  let loadingTime = now - performance.timing.navigationStart;

  document.querySelector(".output").innerText =
    "Chargement de la page : " + loadingTime + " ms";
}, false);

window.addEventListener("load", function () {
  let now = new Date().getTime();
  let loadingTime = now - performance.timing.navigationStart;

  document.querySelector(".output-en").innerText =
    "Page loading : " + loadingTime + " ms";
}, false);

// Menu Dropdown

function toggleDropdown() {
  var element = document.getElementById("menu");
  element.classList.toggle("is-active");
}

//Fade in

var el = document.getElementsByClassName('section')[0];

function fadeIn(el) {
  var opacity = 0;

  el.style.opacity = 0;
  el.style.filter = '';

  var last = +new Date();
  var tick = function () {
    opacity += (new Date() - last) / 800;
    el.style.opacity = opacity;
    el.style.filter = 'alpha(opacity=' + (100 * opacity) | 0 + ')';

    last = +new Date();

    if (opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

fadeIn(el);

// Fathom - simple website analytics - https://github.com/usefathom/fathom

(function(f, a, t, h, o, m){
  a[h]=a[h]||function(){
  (a[h].q=a[h].q||[]).push(arguments)
  };
  o=f.createElement('script'),
  m=f.getElementsByTagName('script')[0];
  o.async=1; o.src=t; o.id='fathom-script';
  m.parentNode.insertBefore(o,m)
  })(document, window, '//stats.clic2000.fr/tracker.js', 'fathom');
fathom('set', 'siteId', 'JEHMY');
fathom('trackPageview');