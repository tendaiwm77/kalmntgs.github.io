const items = document.querySelectorAll(".service-item");

items.forEach(item => {
    item.querySelector(".service-header").addEventListener("click", () => {

        items.forEach(i => {
            if (i !== item) i.classList.remove("active");
        });

        item.classList.toggle("active");
    });
});

/* SCROLL ANIMATION */
window.addEventListener("scroll", () => {
    items.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            item.classList.add("show");
        }
    });
});
