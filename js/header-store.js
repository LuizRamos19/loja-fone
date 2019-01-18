const $search = document.querySelector('[type=search]');
const $searchIcon = document.querySelector('.search');
const $closeIcon = document.querySelector('.close');

$searchIcon.addEventListener('click', () => {
    $search.classList.toggle('-active');
    $searchIcon.classList.toggle('-active');
    $closeIcon.classList.toggle('-active');
})

$closeIcon.addEventListener('click', () => {
    $search.classList.toggle('-active');
    $searchIcon.classList.toggle('-active');
    $closeIcon.classList.toggle('-active');  
})