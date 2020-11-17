// Menu Dropdown

document.getElementById("toggle1").onclick = function () {
  toggleDropdownLang();
};
document.getElementById("toggle2").onclick = function () {
  toggleDropdown();
};

function toggleDropdown() {
  var element = document.getElementById("menu");
  element.classList.toggle("is-active");
}

function toggleDropdownLang() {
  document.getElementById("menu-lang").classList.toggle("is-active");
}

window.onclick = function (event) {
  if (!event.target.matches(".click")) {
    var myDropdown = document.getElementById("menu-lang");
    if (myDropdown.classList.contains("is-active")) {
      myDropdown.classList.remove("is-active");
    }
  }
};

//Fade in

var el = document.getElementsByClassName("section")[0];

function fadeIn(el) {
  var opacity = 0;

  el.style.opacity = 0;
  el.style.filter = "";

  var last = +new Date();
  var tick = function () {
    opacity += (new Date() - last) / 800;
    el.style.opacity = opacity;
    el.style.filter = ("alpha(opacity=" + 100 * opacity) | (0 + ")");

    last = +new Date();

    if (opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

fadeIn(el);
