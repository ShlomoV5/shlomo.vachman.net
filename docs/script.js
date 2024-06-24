document.addEventListener("scroll", function() {
    const sidebar = document.querySelector(".sidebar");
    const scrollY = window.scrollY;
    
    if (scrollY > 0) {
        sidebar.style.transform = "translateY(0)";
    } else {
        sidebar.style.transform = "translateY(-50px)";
    }
});
