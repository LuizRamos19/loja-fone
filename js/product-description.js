// 1 - Ter a janela (browser) na tela
// 2 - Ter o HTML da mão
// 3 - Pegar o coração
// 4 - Pegar o clique do coração
// 5 - No momento que o user clicar, mostrar um ae na tela

const $heart = window.document.querySelector('.-heart');
const $stars = document.querySelectorAll('.star');

$stars.forEach(function($star, index) {
    $star.addEventListener('click', handleClick(index));
});

$heart.addEventListener('click', handleClick());

function handleClick(index) {
    return function () {
        if (index != null) {
            let i = index + 1;
            for (i; i <= $stars.length - 1; i++) {
                $stars[i].classList.remove('-active');
            }
            for (i = 0; i < index; i++) {
                $stars[i].classList.add('-active');
            }
        }
        this.classList.toggle('-active');
    }
}