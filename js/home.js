// HOME PAGE SCRIPT

document.addEventListener("DOMContentLoaded", () => {
    console.log("Home page loaded");

    // Optional: smooth scroll (future use)
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
