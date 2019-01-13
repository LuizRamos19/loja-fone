const $second = document.querySelector('.-second');

$cart.addEventListener('click', handleCartClick);

function handleCartClick() {
    console.log('User clicou no botão de adicionar no carrinho');
    $cartLink.textContent = 'Mudou';
}