
// =====================================
// ELEGANCE FASHION STUDIO
// Website Interactions
// =====================================

// Wait until the HTML page has loaded
document.addEventListener("DOMContentLoaded", function () {

    // GET ELEMENTS
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navigationItems = document.querySelectorAll(".nav-links a");

    // MOBILE NAVIGATION MENU
    if (menuToggle && navLinks) {

        // Open and close menu
        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.textContent = isOpen ? "✕" : "☰";

        });

        // Close menu when a navigation link is clicked
        navigationItems.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.textContent = "☰";

            });

        });

        // Close menu when Escape is pressed
        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.textContent = "☰";

            }

        });

    }

    // AUTOMATIC COPYRIGHT YEAR
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // SMOOTH SCROLLING
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    console.log("Elegance Fashion Studio website is ready!");

});
