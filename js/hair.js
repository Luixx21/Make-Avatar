// Selecionando a boca
const hair = document.querySelector('.hair');

// Quando quiser que o nariz se irrite (exemplo: ao clicar)
hair.addEventListener('click', () => {
    hair.style.top = "-150px";
    mouth.classList.add('open');
});
hair.addEventListener('mouseleave', () => {
    hair.style.top = "-50px";
    mouth.classList.remove('open');
});
