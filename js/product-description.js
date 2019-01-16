// 1 - Ter a janela (browser) na tela
// 2 - Ter o HTML da mão
// 3 - Pegar o coração
// 4 - Pegar o clique do coração
// 5 - No momento que o user clicar, mostrar um ae na tela

const $heart = window.document.querySelector('.-heart');
const $stars = document.querySelectorAll('.star');

$stars.forEach(function($star) {
    $star.addEventListener('click', handleClick);
});

$heart.addEventListener('click', handleClick);

function handleClick() {
    this.classList.toggle('-active');
}