document.getElementById("sketchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Thank you for ordering a design sketch! We'll contact you shortly.");
  this.reset(); // Clear the form
});

