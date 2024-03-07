document.getElementById('explore').addEventListener('click', function() {
  console.log('Explore button clicked');
  const menu = document.querySelector('.main-menu-container');
  const closeButton = document.querySelector('#close');

  menu.classList.add('active');
  closeButton.style.display = 'block';
  document.body.classList.add('menu-active');
  this.style.transform = 'translateY(-150%)';
});

document.getElementById('close').addEventListener('click', function() {
  console.log('Close button clicked');
  const menu = document.querySelector('.main-menu-container');
  const exploreButton = document.getElementById('explore');

  menu.classList.remove('active');
  this.style.display = 'none';
  document.body.classList.remove('menu-active');
  exploreButton.style.transform = 'translateY(0)';
});

document.documentElement.classList.remove('no-js');