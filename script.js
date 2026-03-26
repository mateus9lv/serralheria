// Seleciona os elementos necessários
const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Contador para rastrear qual slide está visível
let counter = 0;

// Função que atualiza a posição do slide
function updateSlidePosition() {
    // A largura do container é 100% de cada item
    const size = carouselItems[0].clientWidth;
    // Move o 'trem' para a esquerda multiplicando a largura pelo contador
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Evento para o botão "Próximo"
nextBtn.addEventListener('click', () => {
    // Se estiver no último slide, volta para o primeiro
    if (counter >= carouselItems.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    updateSlidePosition();
});

// Evento para o botão "Anterior"
prevBtn.addEventListener('click', () => {
    // Se estiver no primeiro slide, vai para o último
    if (counter <= 0) {
        counter = carouselItems.length - 1;
    } else {
        counter--;
    }
    updateSlidePosition();
});

// --- OPIONAL: Carrossel Automático ---
// Descomente as linhas abaixo para o slide passar sozinho a cada 3 segundos
// setInterval(() => {
//     nextBtn.click(); // Simula um clique no botão 'Próximo'
// }, 3000); 

// --- Correção para Redimensionamento de Tela ---
// Se o usuário girar o celular ou redimensionar a janela, 
// o cálculo do tamanho precisa ser refeito.
window.addEventListener('resize', updateSlidePosition);
