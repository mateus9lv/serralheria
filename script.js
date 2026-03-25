// Exemplo: Alerta simples ao clicar no botão de contato
document.getElementById('btn-contato').addEventListener('click', function() {
    alert('Obrigado pelo interesse! Em breve um consultor entrará em contato.');
});

// Suavizar o scroll ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});