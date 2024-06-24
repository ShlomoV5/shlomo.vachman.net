document.addEventListener("wheel", function(event) {
    if (event.deltaY > 0) {
        document.querySelector('.viewport').scrollBy({
            left: window.innerWidth,
            behavior: 'smooth'
        });
    } else {
        document.querySelector('.viewport').scrollBy({
            left: -window.innerWidth,
            behavior: 'smooth'
        });
    }
});
