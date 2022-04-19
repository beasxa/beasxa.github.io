const menu = document.quearySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
menu.adEvenListener('click', function() {
menuLinks.classList.toggle('active')
})