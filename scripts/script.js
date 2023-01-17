let header_burger = document.querySelectorAll('.header_burger,.header_link');
let header_menu = document.querySelector('.header_menu');
let back = document.querySelector('body');

header_burger.forEach(function (item) {
    item.onclick = function () {
        item.classList.toggle('active');
        header_menu.classList.toggle('active');
        back.classList.toggle('lock');
    }
});

// (() => {
//     window.onload = () => {
//         let header__burger = document.querySelector('.header__burger');
//         let header__menu = document.querySelector('.header__menu');
//         let body = document.querySelector('body');
//         header__burger.addEventListener('click', (e)=> {
//             header__burger.classList.toggle('active');
//             header__menu.classList.toggle('active');
//             body.classList.toggle('lock');
//         })
//     }
// })();


