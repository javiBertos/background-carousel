(() => {
    let count = 0, maxCount = document.getElementsByClassName('carousel-item').length;
    window.setInterval(() => {
        let shown = document.getElementsByClassName('carousel-item')[count], next = document.getElementsByClassName('carousel-item')[++count == maxCount ? 0 : count];
        if (count >= maxCount) {
            count = 0;
        }
        shown.classList.remove('in');
        next.classList.add('in');
    }, 5000);
})();
