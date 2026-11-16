const menubutton = document.querySelector('.hiddenmenubutton');
const nav = document.querySelector('nav');

menubutton.addEventListener('click', (e) => {
    e.stopPropagation();
    menubutton.style.display = 'none';
    nav.style.display = 'flex';

});
document.addEventListener('click', (e) => {
    if (menubutton.style.display === 'none' && !nav.contains(e.target)) {
        nav.style.display = 'none';
        menubutton.style.display = 'block';
    }
});
const windowsize = window.matchMedia('(max-width: 992px)');

windowsize.addEventListener('change', (e) => {
    menubutton.style.display = '';
    nav.style.display = '';
});