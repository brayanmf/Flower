onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Manejo del overlay para reproducir audio
  const overlay = document.getElementById("overlay");
  const audio = document.querySelector("audio");

  if (overlay) {
    overlay.addEventListener("click", () => {
      // Intentar reproducir audio
      audio.play().catch((e) => console.log("Error al reproducir audio:", e));

      // Ocultar overlay
      overlay.style.opacity = "0";
      setTimeout(() => {
        overlay.style.display = "none";
      }, 1000);
    });
  }
};
// determino el tamano de la pantalla
var w = window.innerWidth;
var h = window.innerHeight;

// pinto 100 estrellas rosas random
for (i = 0; i < 100; i++) {
  wRan = Math.floor(Math.random() * w);
  hRan = Math.floor(Math.random() * h);
  var star = document.createElement("div");
  star.setAttribute("class", "star");
  star.style.bottom = hRan + "px";
  star.style.right = wRan + "px";
  document.body.appendChild(star);
}
