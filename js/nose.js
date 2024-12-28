// Selecionando a boca
const nose = document.querySelector('.nose');

// Quando quiser que o nariz se irrite (exemplo: ao clicar)
nose.addEventListener('click', () => {
    nose.style.backgroundColor = 'red';
    mouth.classList.add('open');
});
nose.addEventListener('mouseleave', () => {
    nose.style.backgroundColor = document.documentElement.style.getPropertyValue('--nose-color').trim();;
    mouth.classList.remove('open');
});
