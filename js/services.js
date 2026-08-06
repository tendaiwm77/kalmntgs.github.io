const services = document.querySelectorAll(".service");

services.forEach(service => {
  const header = service.querySelector(".service-header");
  const content = service.querySelector(".service-content");
  const toggle = service.querySelector(".toggle");

  header.addEventListener("click", () => {
    const isOpen = content.style.display === "flex";

    // close all first (clean UX)
    document.querySelectorAll(".service-content").forEach(c => {
      c.style.display = "none";
    });

    document.querySelectorAll(".toggle").forEach(t => {
      t.textContent = "+";
    });

    // open current
    if (!isOpen) {
      content.style.display = "flex";
      toggle.textContent = "−";
    }
  });
});
