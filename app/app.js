(() => {
    let carousel = document.getElementsByTagName('section')[0], current = 1;
    window.setInterval(() => {
        carousel.classList.remove(`bg-${current}`);
        current = ++current == 4 ? 1 : current;
        carousel.classList.add(`bg-${current}`);
    }, 5000);
})();
