let mobileMenu = document.querySelector(".nav");
let mobileMenuButton = document.querySelector(".menu")

let width=window.innerWidth;
console.log(width);

if (width < 1024) {
    $('.slider').slick();
}

mobileMenuButton.onclick = function() {
    mobileMenu.classList.toggle('menu_open');
}