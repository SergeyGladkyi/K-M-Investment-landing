const burger = document.querySelector('.burger')

const toggler = document.querySelector('.burger-menu')
const togglerLink = document.querySelectorAll('.burger-menu__links')

burger.addEventListener('click', function () {
    toggler.classList.toggle('active')
})