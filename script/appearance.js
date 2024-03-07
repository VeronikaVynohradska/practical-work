window.addEventListener('load', function() {
  setTimeout(() => {
    const contentContainer = document.querySelector('.content-container');
    contentContainer.style.filter = 'grayscale(0%) brightness(1)';
    contentContainer.style.opacity = '1';
  }, 400);
});

document.documentElement.classList.remove('no-js');