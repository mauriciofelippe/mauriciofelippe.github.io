// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Lightbox functionality for gallery items
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const galleryItems = document.querySelectorAll('[data-lightbox]');

  if (lightbox && lightboxImg && galleryItems.length > 0) {
    galleryItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const fullSrc = item.getAttribute('href') || item.querySelector('img')?.src;
        if (fullSrc) {
          lightboxImg.src = fullSrc;
          lightbox.classList.add('active');
        }
      });
    });

    lightboxClose?.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
      }
    });
  }
});

