// script.js

// Add event listeners for buttons and navigation links
document.addEventListener("DOMContentLoaded", function () {
    // Real-Time Alert Feature (for Alerts page)
    const alertButton = document.querySelector("#alertButton");
    if (alertButton) {
        alertButton.addEventListener("click", showAlert);
    }

    // Toggle different disaster resources in Resources page
    const resourceButtons = document.querySelectorAll(".resource-categories button");
    resourceButtons.forEach(button => {
        button.addEventListener("click", () => {
            displayResources(button.textContent);
        });
    });

    // For smooth scrolling to sections from navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

// Show alert (for Real-Time Alerts page)
function showAlert() {
    alert("This is a sample real-time alert. Stay tuned for updates!");
}

// Display guidelines/resources based on the selected disaster type in Resources page
function displayResources(disasterType) {
    const guidelinesDiv = document.querySelector(".guidelines");
    if (guidelinesDiv) {
        guidelinesDiv.innerHTML = `<p>Guidelines and resources for ${disasterType} will be shown here. Checklists, safety tips, and essential contacts are provided to help you stay prepared.</p>`;
    }
}

// Toggle theme on or off (for future theme customization)
const themeToggleButton = document.getElementById("themeToggle");
if (themeToggleButton) {
    themeToggleButton.addEventListener("click", toggleTheme);
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    document.body.classList.contains("dark-theme") ? themeToggleButton.textContent = "Light Mode" : themeToggleButton.textContent = "Dark Mode";
}
