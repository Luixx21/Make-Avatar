// Selecionando a boca
const mouth = document.querySelector('.mouth');

// Quando quiser que a boca sorria (exemplo: ao clicar)
mouth.addEventListener('mouseenter', () => {
    mouth.classList.add('smiling');
    mouth.classList.add('wide-smile');  // Para um sorriso maior
});

// Quando quiser que a boca volte à posição neutra
mouth.addEventListener('mouseleave', () => {
    mouth.classList.remove('smiling');
    mouth.classList.remove('wide-smile');
});
