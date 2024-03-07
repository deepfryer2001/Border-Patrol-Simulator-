const badbuttonlmao = document.getElementById('badbuttonlmao');
  badbuttonlmao.addEventListener('click', function() {
    const url = 'https://www.geogebra.org/geometry?lang=en';
    alert("DO SOME MATH MOTHERFUCKER");
    setInterval(() => {
      window.open(url, '_blank', 'width=400, height=300');
    }, 100);
  });
document.addEventListener('keydown', function() {
  if (canvas.requestFullscreen) {
    canvas.requestFullscreen();
  } else if (canvas.webkitRequestFullscreen) {
    canvas.webkitRequestFullscreen(); // Safari
  } else if (canvas.msRequestFullscreen) {
    canvas.msRequestFullscreen(); // IE/Edge
  }
});
document.addEventListener('fullscreenchange', function() {
  if (document.fullscreenElement) {
    console.log('Canvas is fullscreen');
  } else {
    console.log('Canvas is not fullscreen');
  }
});