const htmlElements = {
    header: document.querySelector('.nav')
}

const defaultOffset = 250;
let lastScroll = 0;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => htmlElements.header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        htmlElements.header.classList.add('hide');
    }
    else if (scrollPosition() < lastScroll && containHide()) {
        htmlElements.header.classList.remove('hide');
    }
    lastScroll = scrollPosition();
})