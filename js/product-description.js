// 1 - Ter a janela (browser) na tela
// 2 - Ter o HTML da mão
// 3 - Pegar o coração
// 4 - Pegar o clique do coração
// 5 - No momento que o user clicar, mostrar um ae na tela

const $heart = window.document.querySelector('.-heart');
const $star = document.querySelector('.-star').querySelectorAll('.icon');

$heart.addEventListener('click', handleClick);
for (let i = 0; i < $star.length; i++) {
    $star[i].addEventListener('click', handleStarClick);
}

function handleClick() {
    $heart.classList.toggle('-active');
}


function handleStarClick() {
    this.src = 'img/empty-star.png';
}