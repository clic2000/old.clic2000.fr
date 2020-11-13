// Navigation timing
window.addEventListener(
  "load",
  function () {
    let now = new Date().getTime();
    let loadingTime = now - performance.timing.navigationStart;

    document.querySelector(".output").innerText = "Chargement de la page : " + loadingTime + " ms";
  },
  false
);
