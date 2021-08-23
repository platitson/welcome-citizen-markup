const htmlElements = {
    links: [...Array.from(document.querySelectorAll('nav .nav-items li:not(.drop-down-toggler) a')), ...Array.from(document.querySelectorAll('li .drop-down-window a'))],
    chkNav: document.querySelector('.nav input#chk-nav'),
    navSelectedText: document.querySelector('.nav .nav-selected-text')
};

htmlElements.links.forEach(link => {
    link.addEventListener('click', (event) => {
        htmlElements.chkNav.checked = false;
        htmlElements.navSelectedText.textContent = link.textContent;
    });
});