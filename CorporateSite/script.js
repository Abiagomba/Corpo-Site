const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')
const oneModalBtn = document.querySelector('.one--btn'),
    gmModalBtn = document.querySelector('.gm--btn'),
    ptModalBtn = document.querySelector('.pt--btn'),
    gfModalBtn = document.querySelector('.gf--btn'),
    contactModalBtn = document.querySelector('.main__btn--con'),
    oneModalBg = document.querySelector('.one__modal--bg'),
    gmModalBg = document.querySelector('.gm__modal--bg'),
    ptModalBg = document.querySelector('.pt__modal--bg'),
    gfModalBg = document.querySelector('.gf__modal--bg'),
    contactBg = document.querySelector('.contact__modal--bg'),
    modalClose = document.querySelector('.modal-close'),
    bgModal = document.querySelector('.bg');


const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// show active menu when scrolling

const highLightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const serviceMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY
    // console.log(scrollPos)

    // adds 'highlight' class to my menu. once hits 960px, we don't want this to work anymore as the menu changes
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        serviceMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        serviceMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highLightMenu)
window.addEventListener('click', highLightMenu)

// close mobile menu when clicking on item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    // putting menuBars there is saying that 'if it's true or if it's active'
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)

// modal functions for services, about, and contact us
oneModalBtn.addEventListener('click', function () {
    oneModalBg.classList.add('bg--active')
})

ptModalBtn.addEventListener('click', function () {
    ptModalBg.classList.add('bg--active')
})

gfModalBtn.addEventListener('click', function () {
    gfModalBg.classList.add('bg--active')
})

gmModalBtn.addEventListener('click', function () {
    gmModalBg.classList.add('bg--active')
})

contactModalBtn.addEventListener('click', function () {
    contactBg.classList.add('bg--active')
})

document.body.addEventListener('click', function (e) {
    const removeModal = e.target
    removeModal.classList.remove('bg--active')
})

modalClose.addEventListener('click', function (e) {
    console.log(e.target)
    bgModal.classList.remove('bg--active')
})

const closeModal = () => {
    bgModal.classList.remove('bg--active')
}
