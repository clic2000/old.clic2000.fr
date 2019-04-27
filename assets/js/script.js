// Navigation timing

window.addEventListener("load", function () {
       let now = new Date().getTime();
       let loadingTime = now - performance.timing.navigationStart;

       document.querySelector(".output").innerText =
              "Chargement de la page : " + loadingTime + " ms";
}, false);

// Menu Dropdown


function toggleDropdown() {
       var element = document.getElementById("menu");
       element.classList.toggle("is-active");
}

//Fade in


function fadein() {
       var el = document.getElementsByClassName('section')[0];
       el.classList.remove('hide');
       el.classList.add('show');
}

window.onload = fadein();


