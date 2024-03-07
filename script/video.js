document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('video2').play();
  document.getElementById('video3').play();

  setTimeout(() => { document.getElementById('video4').play(); }, 10000);
  setTimeout(() => { document.getElementById('video1').play(); }, 23000);
});