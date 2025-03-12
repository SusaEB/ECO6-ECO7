const imageInput = document.getElementById('image-input');
const imagePreview = document.getElementById('image-preview');
const imageLarge = document.getElementById('image-large');
const overlay = document.getElementById('overlay');

// Función para manejar la selección de una imagen
imageInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            imagePreview.src = event.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Función para mostrar la imagen en tamaño grande
imagePreview.addEventListener('click', function () {
    imageLarge.src = imagePreview.src;
    overlay.style.display = 'flex';
    imageLarge.style.display = 'block';
});

// Función para cerrar el overlay
function closeOverlay() {
    overlay.style.display = 'none';
    imageLarge.style.display = 'none';
}
