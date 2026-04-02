const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 0;
const totalItems = carouselItems.length;

function updateSlide() {
    // Uso de porcentagem para evitar erros de redimensionamento
    carouselSlide.style.transform = `translateX(${-counter * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    counter = (counter + 1) % totalItems;
    updateSlide();
});

prevBtn.addEventListener('click', () => {
    counter = (counter - 1 + totalItems) % totalItems;
    updateSlide();
});

// Garante que o slide se ajuste se a tela mudar de tamanho
window.addEventListener('resize', updateSlide);
