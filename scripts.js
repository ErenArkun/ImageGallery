const galleryImages = document.querySelectorAll('.gallery-image');
const modalImage = document.getElementById('modalImage');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const imagePath = image.getAttribute('src');
        modalImage.setAttribute('src', imagePath);
    });
});