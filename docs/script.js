let currentSection = 0;
const sections = document.querySelectorAll('.section');

function navigate(direction) {
    console.log("Clicked!");
    currentSection += direction;
    if (currentSection < 0) {
        currentSection = sections.length - 1;
    } else if (currentSection >= sections.length) {
        currentSection = 0;
    }
    sections.forEach((section, index) => {
        section.style.transform = `translateX(${-100 * currentSection}%)`;
    });
}
