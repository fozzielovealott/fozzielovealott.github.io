// englishmain.js
document.addEventListener('DOMContentLoaded', function () {
    var videoElement = document.querySelector('.background-video');
    var touchArea = document.querySelector('body'); // Ajustar o seletor se necessário

    // Versão desktop: mostra o vídeo ao passar o mouse sobre .hover-area
    document.querySelector('.hover-area').addEventListener('mouseenter', function () {
        videoElement.classList.add('show-video');
    });

    document.querySelector('.hover-area').addEventListener('mouseleave', function () {
        videoElement.classList.remove('show-video');
    });

    // Versão mobile: mostra o vídeo enquanto o usuário mantém o dedo pressionado
    touchArea.addEventListener('touchstart', function () {
        videoElement.classList.add('show-video');
    });

    touchArea.addEventListener('touchend', function () {
        videoElement.classList.remove('show-video');
    });

    // Adiciona suporte para múltiplos toques
    touchArea.addEventListener('touchcancel', function () {
        videoElement.classList.remove('show-video');
    });
});
