// Acessa os elementos dos inputs de cor
const hairInput = document.getElementById('hair');
const irisInput = document.getElementById('iris');
const faceInput = document.getElementById('face');
const mouthInput = document.getElementById('mouth');

const eyebrows = document.querySelectorAll('.eyebrow');
// Acessa as partes do rosto (adapte essas IDs conforme necessário no seu HTML)

const lipTop = document.querySelector('.lip-top'); // Exemplo de classe para a boca
const lipBottom = document.querySelector('.lip-bottom'); // Exemplo de classe para a boca

// Função para atualizar a cor do cabelo
hairInput.addEventListener('input', () => {
    const selectedColor = hairInput.value;
    const lighterColor = lightenColor(selectedColor, 0.3); // Clareia a cor em 30%

    document.documentElement.style.setProperty('--hair-color', selectedColor);
    eyebrows.forEach((eyebrow) => {
        eyebrow.style.backgroundColor = lighterColor;2
    });

    // Define a cor mais clara para o gradiente da íris
    document.documentElement.style.setProperty('--hair-color-grade', lighterColor);
});

// Evento para capturar a cor do input
irisInput.addEventListener('input', () => {
    const selectedColor = irisInput.value;
    const lighterColor = lightenColor(selectedColor, 0.3); // Clareia a cor em 30%
    
    // Define a cor base para a íris
    document.documentElement.style.setProperty('--iris-color', selectedColor);
    
    // Define a cor mais clara para o gradiente da íris
    document.documentElement.style.setProperty('--iris-color-grade', lighterColor);
});

// Função para atualizar a cor do rosto
faceInput.addEventListener('input', () => {
    const face = document.querySelector('.face-container'); // Exemplo de classe para a boca
    const faceLighten = lightenColor(faceInput.value, 0.3);

    const ears = document.querySelectorAll('.ear');
    const eyelids = document.querySelectorAll('.eyelid');
    document.documentElement.style.setProperty('--nose-color', faceLighten);

    face.style.backgroundColor = faceInput.value;

    eyelids.forEach((eyelid) => {
        eyelid.style.backgroundColor = faceLighten;
    });

    ears.forEach((ear) => {
        ear.style.backgroundColor = faceLighten;
    });
});

// Função para atualizar a cor da boca
mouthInput.addEventListener('input', () => {
    lipTop.style.backgroundColor = mouthInput.value;
    lipBottom.style.backgroundColor = mouthInput.value;
});
