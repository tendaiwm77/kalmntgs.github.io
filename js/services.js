const serviceItems = document.querySelectorAll(".service-item");

serviceItems.forEach(item => {
    item.querySelector(".service-header").addEventListener("click", () => {

        // close others
        serviceItems.forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
            }
        });

        // toggle current
        item.classList.toggle("active");
    });
});
