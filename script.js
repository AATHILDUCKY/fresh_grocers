document.addEventListener("DOMContentLoaded", function() {
    // Load the Navbar
    loadNavbar();

    // Set default page
    loadPage("home.html");

    // Handle navbar links click
    const navbarLinks = document.querySelectorAll(".navbar-link");
    navbarLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const page = event.target.getAttribute("data-page");
            loadPage(page);
        });
    });
});

// Function to load the navbar from navbar.html
function loadNavbar() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading navbar:", error);
        });
}

// Function to load page content dynamically
function loadPage(page) {
    const contentSection = document.getElementById("content");

    fetch(page)
        .then(response => response.text())
        .then(data => {
            contentSection.innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading page:", error);
        });
}
