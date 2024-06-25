document.getElementById('siButton').addEventListener('click', () => {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '<img src="OIP.png" alt="Imagen de celebración">'; // Ruta de la imagen de celebración
});

document.getElementById('noButton').addEventListener('click', () => {
    const noButton = document.getElementById('noButton');
    noButton.style.position = 'absolute';
    noButton.style.left = `${Math.random() * window.innerWidth}px`;
    noButton.style.top = `${Math.random() * window.innerHeight}px`;
});
