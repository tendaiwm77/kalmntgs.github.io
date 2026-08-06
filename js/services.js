const services = document.querySelectorAll(".service");

services.forEach(service => {
    const header = service.querySelector(".service-header");
    const content = service.querySelector(".service-content");
    const toggle = service.querySelector(".toggle");

    header.addEventListener("click", () => {

        const isOpen = content.style.display === "flex";

        // close all
        document.querySelectorAll(".service-content").forEach(c => {
            c.style.display = "none";
        });

        document.querySelectorAll(".toggle").forEach(t => {
            t.textContent = "+";
        });

        // open clicked
        if (!isOpen) {
            content.style.display = "flex";
            toggle.textContent = "−";
        }
    });
});
