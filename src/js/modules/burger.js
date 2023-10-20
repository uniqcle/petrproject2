const burger = (burgerSelector, menuSelector) => {
    const burgerElem = document.querySelector(burgerSelector),
        menuElem = document.querySelector(menuSelector);

    menuElem.style.display = 'none'

    burgerElem.addEventListener('click', function () {

        if (menuElem.style.display == 'none' && window.screen.availWidth < 993) {
            menuElem.style.display = 'block'
        } else if (menuElem.style.display == 'block') {
            menuElem.style.display = 'none'
        } else {
            menuElem.style.display = 'none'
        }
    })

    window.addEventListener('resize', () => {
        if (window.screen.availWidth < 992) {
            menuElem.style.display = 'none'
        }
    })

}

export default burger; 