const htmlElements = {
    togglers: Array.from(document.querySelectorAll('.drop-down-toggler')),
    windows: Array.from(document.querySelectorAll('.drop-down-window'))
}

window.addEventListener('load', () => {
    htmlElements.windows.forEach(item => {
        item.style.display = 'none';
    })
});

function showAndHideWindow(index, event) {
    event.preventDefault();
    if (htmlElements.windows[index].style.display === 'none') {
        htmlElements.windows[index].style.display = 'block';
    } else {
        htmlElements.windows[index].style.display = ' none';
    }
}

htmlElements.togglers.forEach((item, index) => {
    item.addEventListener('click', showAndHideWindow.bind(this, index));
})

function closeWindowByAnywhereClick(event) {
    if (!event.target.closest('HEADER')) {
        htmlElements.windows.forEach(item => {
            item.style.display = ' none';
        })
    }
}

window.addEventListener('click', closeWindowByAnywhereClick);