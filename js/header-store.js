const $search = document.querySelector('[type=search]');
const $searchIcon = document.querySelector('.search');

$search.addEventListener('click', () => {
    $search.classList.toggle('-active');
    $searchIcon.classList.toggle('-active');
})