// 1 - Ter a janela (browser) na tela
// 2 - Ter o HTML da mão
// 3 - Pegar o coração
// 4 - Pegar o clique do coração
// 5 - No momento que o user clicar, mostrar um ae na tela

const $heart = window.document.querySelector('.-heart');
const $cart = window.document.querySelector('.-second');
console.log($cart);

$heart.addEventListener('click', handleClick);
$cart.addEventListener('click', handleCartClick);

function handleClick() {
    console.log('message');
}

function handleCartClick() {
    console.log('User clicou no botão de adicionar no carrinho');
}