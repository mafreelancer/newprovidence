var button_open_menu = document.querySelector(".hamburger"),
    header = document.querySelector(".header"),
    big_menu = document.querySelector(".footer__content--copy"),
    mobile_menu = document.querySelector(".menu--mobile");

button_open_menu.onclick = function() {
    button_open_menu.classList.toggle("is-active");
    header.classList.toggle('header--open-menu');
    big_menu.classList.toggle("active");
    mobile_menu.classList.toggle("open");
}

//fixed header
function fixedHeader() {
    if (window.pageYOffset > 0) {
        header.classList.add('header--active');
    } else
    {
        header.classList.remove('header--active');
    }
}
fixedHeader();

window.onscroll = fixedHeader;
