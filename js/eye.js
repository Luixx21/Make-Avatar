const eyes = document.querySelectorAll('.eye'); // Seleciona todos os olhos

// Função para clarear uma cor hexadecimal
function lightenColor(color, percent) {
    // Converte a cor hexadecimal para RGB
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);

    // Ajusta o brilho de cada componente de cor (r, g, b)
    r = Math.min(255, r + (255 - r) * percent);
    g = Math.min(255, g + (255 - g) * percent);
    b = Math.min(255, b + (255 - b) * percent);

    // Converte de volta para hexadecimal
    return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
}

eyes.forEach(eye => {
    const iris = eye.querySelector('.iris');
    const pupil = eye.querySelector('.pupil');
    const topEyelid = eye.querySelector('.eyelid.top');
    const bottomEyelid = eye.querySelector('.eyelid.bottom');

    let isMouseDown = false;
    let blinkTimeout;

    // Função para controlar o piscar do olho
    function blink() {
        if (!isMouseDown) {
            topEyelid.style.height = '50%';
            bottomEyelid.style.height = '50%';
            setTimeout(() => {
                topEyelid.style.height = '0%';
                bottomEyelid.style.height = '0%';
            }, 200);
        }
    }

    // Pisca automaticamente a cada 4-5 segundos
    function startBlinking() {
        blink(); // Pisca imediatamente
        blinkTimeout = setInterval(blink, 4000 + 10); // Pisca a cada intervalo aleatório
    }

    function stopBlinking() {
        clearInterval(blinkTimeout); // Para a animação de piscar
    }

    // Detecta o movimento do mouse para mover a pupila
    document.addEventListener('mousemove', (e) => {
        if (!isMouseDown) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Posições relativas dentro da área da íris
            const irisRect = iris.getBoundingClientRect();
            const irisCenterX = irisRect.left + irisRect.width / 2;
            const irisCenterY = irisRect.top + irisRect.height / 2;

            // Calcula a distância do mouse ao centro da íris
            const deltaX = mouseX - irisCenterX;
            const deltaY = mouseY - irisCenterY;
            const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), 35); // Limita o movimento da pupila

            const angle = Math.atan2(deltaY, deltaX);
            const pupX = distance * Math.cos(angle);
            const pupY = distance * Math.sin(angle);

            pupil.style.transform = `translate(-50%, -50%) translate(${pupX}px, ${pupY}px)`;
        }
    });

    // Para o piscar quando o mouse sair da área do olho
    eye.addEventListener('mouseleave', () => {
        stopBlinking(); // Para a animação de piscar ao sair
        topEyelid.style.height = '0%';
        bottomEyelid.style.height = '0%'; // Deixa o olho aberto
    });

    // Retoma o piscar quando o mouse entra novamente
    eye.addEventListener('mouseenter', () => {
        if (!isMouseDown) {
            stopBlinking(); // Para de piscar quando o mouse é pressionado
            topEyelid.style.height = '50%';
            bottomEyelid.style.height = '50%'; // Deixa o olho aberto enquanto pressionado
        }
    });

    // Inicia a animação de piscar ao carregar a página
    startBlinking();
});
