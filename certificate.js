// certificate.js

document.querySelectorAll('.preview-button').forEach(button => {
    button.addEventListener('click', function() {
      const imageSrc = this.getAttribute('data-image');
      if (imageSrc) {
        document.getElementById('preview-image').src = imageSrc;
      } else {
        document.getElementById('preview-image').src = ''; // If no image, clear it
      }
    });
  });