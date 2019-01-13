// 1 - Ter a janela (browser) na tela
// 2 - Ter o HTML da mão
// 3 - Pegar o coração
// 4 - Pegar o clique do coração
// 5 - No momento que o user clicar, mostrar um ae na tela

const $heart = window.document.querySelector('.-heart');
const $star = document.querySelector('.-star').querySelectorAll('.icon');

$heart.addEventListener('click', handleClick);
for (let i = 0; i < $star.length; i++) {
    $star[i].addEventListener('click', handleStarClick(i));
}

function handleClick() {
    $heart.classList.toggle('-active');
}

function handleStarClick(index) {
    return function () {
        if (this.classList.contains('-active')) {
            this.src = 'img/empty-star.png';
            this.classList.remove('-active');
        } else {
            for (let i = 0; i <= index; i++) {
                $star[i].src = 'img/star.png';
                $star[i].classList.add('-active')
            }
        }
    }    
}