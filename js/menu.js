const $menu = document.querySelector('.menu');
const $iconMenu = $menu.querySelector('.icon');
const $menuItens = document.querySelector('.navigation').querySelectorAll('.action');

$iconMenu.addEventListener('click', event => {
    event.preventDefault();
    $menuItens.forEach(element => {
        element.classList.toggle('-active');
    });
})