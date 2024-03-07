document.addEventListener('DOMContentLoaded', function() {
  const galleryContainers = document.querySelectorAll('.gallery-container');
  let currentActive = 0; 
  galleryContainers[currentActive].classList.add('active');

  document.addEventListener('keydown', function(event) {
      if (event.ctrlKey && (event.key === "ArrowRight" || event.key === "ArrowLeft")) {
          galleryContainers[currentActive].classList.remove('active');
          
          if (event.key === "ArrowRight") {
              currentActive = (currentActive + 1) % galleryContainers.length;
          } else if (event.key === "ArrowLeft") {
              currentActive = (currentActive - 1 + galleryContainers.length) % galleryContainers.length;
          }
          
          galleryContainers[currentActive].classList.add('active');
      }
  });

  const images = document.querySelectorAll('.gallery-container img');
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('img');
  modalContent.classList.add('modal-content');

  const closeModal = document.createElement('span');
  closeModal.innerHTML = '&times;';
  closeModal.classList.add('close');

  modal.appendChild(closeModal);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  images.forEach(image => {
      image.addEventListener('click', function() {
          modalContent.src = this.src;
          modal.style.display = 'block';
      });
  });

  closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  modal.addEventListener('click', function(e) {
      if (e.target !== closeModal && e.target !== modalContent) {
          e.stopPropagation();
          e.preventDefault();
      }
  });
});

document.documentElement.classList.remove('no-js');